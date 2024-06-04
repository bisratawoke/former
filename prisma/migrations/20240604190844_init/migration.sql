/*
  Warnings:

  - You are about to drop the column `question` on the `formField` table. All the data in the column will be lost.
  - Added the required column `formId` to the `formField` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `formField` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "formField" DROP COLUMN "question",
ADD COLUMN     "formId" TEXT NOT NULL,
ADD COLUMN     "label" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "answer" (
    "id" TEXT NOT NULL,
    "formFieldType" "FORM_FIELD_TYPE" NOT NULL,
    "content" TEXT NOT NULL,
    "formFieldId" TEXT NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "formField" ADD CONSTRAINT "formField_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_formFieldId_fkey" FOREIGN KEY ("formFieldId") REFERENCES "formField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
