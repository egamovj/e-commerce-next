"use client";

import { ProductType } from "@/interfaces";
import React, { FC } from "react";
import { useState } from "react";
import Image from "next/image";

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-110 blur-0 grayscale-0"
        }}`}
        onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-110 blur-0 grayscale-0"
        }}`}
        onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
