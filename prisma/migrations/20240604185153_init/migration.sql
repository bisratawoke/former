-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('ACTIVE', 'ENACTIVE');

-- AlterTable
ALTER TABLE "form" ADD COLUMN     "status" "STATUS" NOT NULL DEFAULT 'ACTIVE';
