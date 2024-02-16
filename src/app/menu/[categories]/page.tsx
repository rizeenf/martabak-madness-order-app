"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  MARTABAK_KERING,
  MARTABAK_MANIS,
  MARTABAK_TELOR,
  Products,
} from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type ParamsProps = {
  params: {
    categories: string;
  };
};

const Categories = ({ params }: ParamsProps) => {
  const { categories } = params;

  const data: Products =
    categories == "martabak-manis"
      ? MARTABAK_MANIS
      : categories == "martabak-telor"
      ? MARTABAK_TELOR
      : MARTABAK_KERING;

  return (
    <MaxWidthWrapper className="flex flex-row flex-wrap gap-5">
      {data.map((product) => (
        <div key={product.id} className="flex flex-col gap-2 p-5 border">
          {product.img && (
            <Image
              alt={product.title}
              src={product.img}
              width={300}
              height={300}
            />
          )}
          <div className="flex flexrow justify-between">
            <div>
              <h1>{product.title}</h1>
              <span>{product.price}</span>
            </div>
            <Link href={`/product/${product.id}`}>
              <Button>Beli</Button>
            </Link>
          </div>
        </div>
      ))}
    </MaxWidthWrapper>
  );
};

export default Categories;
