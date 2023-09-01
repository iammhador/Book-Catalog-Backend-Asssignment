/*
  Warnings:

  - You are about to drop the column `orderedBooks` on the `Order` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `OrderedBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `OrderedBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `OrderedBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderedBooks";

-- AlterTable
ALTER TABLE "OrderedBook" ADD COLUMN     "bookId" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderedBook" ADD CONSTRAINT "OrderedBook_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedBook" ADD CONSTRAINT "OrderedBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
