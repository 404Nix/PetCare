-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CUSTOMER', 'CLINIC', 'PET_SHOP', 'ADMIN');

-- CreateEnum
CREATE TYPE "OnboardingStatus" AS ENUM ('ROLE_SELECTION', 'PROFILE_COMPLETION', 'COMPLETED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole",
    "onboardingStatus" "OnboardingStatus" NOT NULL DEFAULT 'ROLE_SELECTION',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
