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

interface Product {
    id: string;
    name: string;
    priceInCents: number;
}

interface EditProductModalProps {
    product: Product | null;
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

export const EditProductModal = ({ product, isOpen, onClose }: EditProductModalProps) => {
    const queryClient = useQueryClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    useEffect(() => {
        if (product) {
            form.reset({
                name: product.name,
                priceInCents: String(product.priceInCents),
            });
        }
    }, [product, form]);

    const updateMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            onClose();
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (!product) return;

        const dataToSend = {
            ...values,
            priceInCents: parseInt(values.priceInCents, 10),
        };

        updateMutation.mutate({ id: product.id, data: dataToSend });
    }

    if (!product) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Produk: {product.name}</DialogTitle>
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
                        <Button type="submit" disabled={updateMutation.isPending}>
                            {updateMutation.isPending ? "Menyimpan..." : "Simpan Perubahan"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}