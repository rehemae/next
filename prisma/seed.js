const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.survey.create({
    data: {
      input1: "im here?",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
