-- CreateTable
CREATE TABLE "Address" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "mapsUrl" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_street_key" ON "Address"("street");

-- CreateIndex
CREATE UNIQUE INDEX "Address_mapsUrl_key" ON "Address"("mapsUrl");
