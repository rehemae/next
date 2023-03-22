import { PrismaClient } from "@prisma/client";

const global = {
  // eslint-disable-next-line no-var
  cachedPrisma: PrismaClient,
};

let prisma = PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}
const db = prisma;

module.exports = { db };

//export const db = prisma;
