"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Cart from "./Cart";
import LeftNavbar from "./LeftNavbar";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <div className="h-12 bg-amber-900 z-40 text-white">
      <MaxWidthWrapper className="h-12">
        <header className="h-full flex flex-row items-center justify-between">
          <div className="left">
            <LeftNavbar />
          </div>
          <div className="right flex flex-row items-center justify-between gap-5">
            <Link
              href="/orders"
              className={cn(navigationMenuTriggerStyle(), "bg-amber-900")}
            >
              Orders
            </Link>
            <span className="w-px hidden sm:flex h-5 bg-amber-500" />
            <Cart />
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
