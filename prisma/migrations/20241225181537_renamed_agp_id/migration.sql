/*
  Warnings:

  - You are about to drop the column `activeGradingPolicyId` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "activeGradingPolicyId",
ADD COLUMN     "agpId" INTEGER;
