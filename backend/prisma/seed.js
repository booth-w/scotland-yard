// Temporary sample board

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const locations = [1, 2, 3, 4, 5].map((id) => ({ id }));
  await prisma.location.createMany({ data: locations, skipDuplicates: true });

  const edges = [
    { fromId: 1, toId: 2, transport: "TAXI" },
    { fromId: 2, toId: 1, transport: "TAXI" },
    { fromId: 2, toId: 3, transport: "BUS" },
    { fromId: 3, toId: 2, transport: "BUS" },
    { fromId: 3, toId: 4, transport: "UNDERGROUND" },
    { fromId: 4, toId: 3, transport: "UNDERGROUND" },
    { fromId: 4, toId: 5, transport: "TAXI" },
    { fromId: 5, toId: 4, transport: "TAXI" },
  ];

  for (const e of edges) {
    try {
      await prisma.edge.create({ data: e });
    } catch {}
  }

  console.log("Seeded demo board nodes/edges.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
