-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "by" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);
