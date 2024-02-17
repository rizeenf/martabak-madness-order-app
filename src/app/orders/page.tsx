"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Orders = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  return <div>Orders</div>;
};

export default Orders;
