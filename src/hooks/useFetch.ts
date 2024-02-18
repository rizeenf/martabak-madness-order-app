"use client";
import { useEffect } from "react";

export const useFetch = (endpoint?: string) => {
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${endpoint}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error while fetch data.");
    }

    return res.json();
  };

  useEffect(() => {
    fetchData();
  }, []);
};
