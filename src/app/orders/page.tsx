"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Orders = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <MaxWidthWrapper>
      <table className="w-full my-5">
        <thead className="border-b text-left bg-amber-700 text-white">
          <tr className="border-b border-amber-100">
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-amber-100">
            <td>gje89ajfh8fe9ah</td>
            <td>2201-20-21</td>
            <td>50000</td>
            <td>Martabak Manis Keju</td>
            <td>Delivered</td>
          </tr>
          <tr className="border-b border-amber-100">
            <td>gje89ajfh8fe9ah</td>
            <td>2201-20-21</td>
            <td>50000</td>
            <td>Martabak Manis Keju</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </table>
    </MaxWidthWrapper>
  );
};

export default Orders;
