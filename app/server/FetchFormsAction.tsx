"use server";
import prisma from "@/app/lib/prisma";
export default async function FetchFormsAction() {
  try {
    const resultSet = await prisma.form.findMany({});
    console.log(resultSet);
    return resultSet;
  } catch (err) {
    console.log(err);
  }
}
