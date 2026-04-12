"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl font-light cursor-pointer hover:text-neutral-300 transition-colors leading-none"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="relative w-full max-w-5xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="object-contain w-full h-auto max-h-[90vh] rounded-xl"
        />
      </div>
    </div>
  );
}
