import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <MaxWidthWrapper className="min-h-screen h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center border">
        <Link href={"/menu/martabak-manis"} className="flex flex-row">
          <div className="flex flex-col justify-around flex-1 px-5 bg-amber-900 text-white">
            <h1 className="font-semibold text-xl ">MARTABAK MANIS</h1>
            <p className="line-clamp-2 text-xs">
              Nikmati Martabak Manis dengan pilihan topping manis seperti
              cokelat, keju, kacang, dan masih banyak lagi.
            </p>
            <Button className="border">Explore</Button>
          </div>
          <div className="flex-1 relative ">
            <Image
              className="object-cover aspect-square h-56 w-56"
              alt="Menu Image"
              src={"/images/martabak1.jpeg"}
              width={200}
              height={200}
            />
          </div>
        </Link>
        <Link href={"/menu/martabak-telor"} className="flex flex-row">
          <div className="flex flex-col justify-around flex-1 px-5">
            <h1 className="font-semibold text-xl">MARTABAK TELOR</h1>
            <p className="line-clamp-2 text-muted-foreground text-xs">
              Nikmati Martabak Manis dengan pilihan topping manis seperti
              cokelat, keju, kacang, dan masih banyak lagi.
            </p>
            <Button>Explore</Button>
          </div>
          <div className="flex-1 relative ">
            <Image
              className="object-cover aspect-square h-56 w-56"
              alt="Menu Image"
              src={"/images/martelor1.jpeg"}
              width={200}
              height={200}
            />
          </div>
        </Link>
        <Link href={"/menu/martabak-kering"} className="flex flex-row">
          <div className="flex flex-col justify-around flex-1 px-5 bg-green-600 text-white">
            <h1 className="font-semibold text-xl">MARTABAK KERING</h1>
            <p className="line-clamp-2 text-xs">
              Nikmati Martabak Manis dengan pilihan topping manis seperti
              cokelat, keju, kacang, dan masih banyak lagi.
            </p>
            <Button className="border">Explore</Button>
          </div>
          <div className="flex-1 relative ">
            <Image
              className="object-cover aspect-square h-56 w-56"
              alt="Menu Image"
              src={"/images/markering1.jpeg"}
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Menu;
