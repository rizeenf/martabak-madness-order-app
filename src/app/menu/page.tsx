import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { menu } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const Menu = () => {
  return (
    <MaxWidthWrapper className="min-h-screen h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        {menu.map((product, idx) => (
          <Link
            key={product.id}
            href={product.href}
            className="flex flex-row hover:opacity-70 "
          >
            <div
              className={cn(
                "flex flex-col justify-around flex-1 px-5 ",
                idx % 2 == 0 ? "bg-amber-900 text-white" : ""
              )}
            >
              <h1 className="font-semibold text-xl ">{product.title}</h1>
              <p className="line-clamp-2 text-xs">{product.desc}</p>
              <Button className="border">Explore</Button>
            </div>
            <div className="flex-1 relative ">
              {product.img && (
                <Image
                  className="object-cover aspect-square h-56 w-56"
                  alt="Menu Image"
                  src={product.img}
                  width={200}
                  height={200}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Menu;
