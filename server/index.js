require("dotenv").config();

const express = require("express");
const path = require("path");

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

// ----- Prisma (Prisma 7 requires adapter for direct Postgres) -----
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const app = express();

// Serve static HTML from server/public
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ ok: true });
});

app.get("/status", async (req, res) => {
  // Optional DB check
  await prisma.$queryRaw`SELECT 1`;

  res.json({
    status: "running",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    db: "ok",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
