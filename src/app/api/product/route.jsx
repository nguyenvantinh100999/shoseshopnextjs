import { NextResponse } from "next/server";

export async function GET() {
  //kết nối database = connectionstring .... {select,from,wherer}
  //   const res = [
  //     { id: 1, name: "tèo" },
  //     { id: 2, name: "tý" },
  //     { id: 3, name: "tủm" },
  //   ];

  //từ backend nextjs => kết nối đến backend của apistore.cybersoft.edu.vn
  const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
  if (!res.ok) {
    return new Error("fail to fetch data");
  }
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}
