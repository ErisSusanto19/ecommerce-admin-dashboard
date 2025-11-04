"use client";

import { useState, SyntheticEvent } from 'react';

export function useImageFallback(
    initialSrc: string | null | undefined,
    fallbackSrc: string
) {
  
    const [imgSrc, setImgSrc] = useState(initialSrc || fallbackSrc);

    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        if (e.currentTarget.src !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };

    return {
        src: imgSrc,
        onError: handleError,
    };
}