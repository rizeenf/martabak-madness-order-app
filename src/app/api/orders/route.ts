import { getAuthSession } from "@/lib/authOpts";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const orders = await prisma.order.findMany({
        where: {
          ...(session.user.isAdmin == false && {
            userEmail: session.user.email!,
          }),
        },
      });

      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({
          message: "Something went wrong while fetching orders.",
        }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({
        message: "You are not authenticated.",
      }),
      { status: 401 }
    );
  }
};
