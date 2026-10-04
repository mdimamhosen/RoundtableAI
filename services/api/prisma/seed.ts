import { PrismaClient, Role } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const adminHash = await bcrypt.hash("admin-dev-pass", 10);
  const clientHash = await bcrypt.hash("client-dev-pass", 10);

  await prisma.user.upsert({
    where: { email: "admin@proofdesk.local" },
    update: {
      passwordHash: adminHash,
      role: Role.ADMIN,
      name: "Desk Admin",
      emailVerified: true,
    },
    create: {
      email: "admin@proofdesk.local",
      passwordHash: adminHash,
      role: Role.ADMIN,
      name: "Desk Admin",
      emailVerified: true,
    },
  });

  await prisma.user.upsert({
    where: { email: "client@proofdesk.local" },
    update: {
      passwordHash: clientHash,
      role: Role.CLIENT,
      name: "Demo Client",
      emailVerified: true,
    },
    create: {
      email: "client@proofdesk.local",
      passwordHash: clientHash,
      role: Role.CLIENT,
      name: "Demo Client",
      emailVerified: true,
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
