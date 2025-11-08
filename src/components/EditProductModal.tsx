"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface Product {
    id: string;
    name: string;
    priceInCents: number;
}

interface EditProductModalProps {
    product?: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const formSchema = z.object({
    name: z.string().min(3, "Nama produk minimal 3 karakter"),
    priceInCents: z.string()
    .min(1, { message: "Harga harus diisi." })
    .refine(val => !isNaN(parseInt(val, 10)), { message: "Harga harus berupa angka." })
})

type ProductUpdatePayload = {
    name: string;
    priceInCents: number;
}

const updateProduct = async({id, data}: {id: string, data: ProductUpdatePayload}) => {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if(!res.ok){
        throw new Error(`Failed to update product ${id}`)
    }

    return res.json();
}

const createProduct = async({data}: {data: ProductUpdatePayload}) => {
    const res = await fetch(`/api/products/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if(!res.ok){
        throw new Error(`Failed to update product`)
    }

    return res.json();
}

export const EditProductModal = ({ product, isOpen, onClose }: EditProductModalProps) => {
    const queryClient = useQueryClient()
    const isEditMode = !!product;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", priceInCents: "" },
    })

    useEffect(() => {
        if (product) {
            form.reset({
                name: product.name,
                priceInCents: String(product.priceInCents),
            });
        } else {
            form.reset({ name: "", priceInCents: "" });
        }
    }, [product, form, isOpen]);

    const updateMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product successfully updated.")
            onClose();
        },
        onError: (error) => {
            toast.error(`Failed to update product: ${error.message}`)
        }
    });

    const createMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product successfully created.")
            onClose();
        },
        onError: (error) => {
            toast.error(`Failed to create product: ${error.message}`)
        }
    });
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        const dataToSend = {
            ...values,
            priceInCents: parseInt(values.priceInCents, 10),
        };

        if (isEditMode) {
            updateMutation.mutate({ id: product.id, data: dataToSend });
        } else {
            createMutation.mutate({ data: dataToSend });
        }
    }

    const isPending = updateMutation.isPending || createMutation.isPending;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isEditMode ? `Edit Produk: ${product.name}` : "Tambah Produk Baru"}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Produk</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nama produk..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="priceInCents"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Harga (dalam Rupiah)</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Harga..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Menyimpan..." : (isEditMode ? "Simpan Perubahan" : "Buat Produk")}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}