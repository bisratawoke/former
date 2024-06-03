/*
  Warnings:

  - You are about to drop the `forms` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FORM_FIELD_TYPE" AS ENUM ('SELECT', 'TEXT_INPUT', 'RADIO', 'TEXT_AREA', 'RANGE');

-- DropTable
DROP TABLE "forms";

-- CreateTable
CREATE TABLE "form" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "decription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formField" (
    "id" TEXT NOT NULL,
    "type" "FORM_FIELD_TYPE" NOT NULL,
    "question" TEXT NOT NULL,
    "correct_answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "formField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "formFieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "choice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "choice" ADD CONSTRAINT "choice_formFieldId_fkey" FOREIGN KEY ("formFieldId") REFERENCES "formField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
