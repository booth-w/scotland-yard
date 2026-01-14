require("dotenv").config();

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running  Try /health or /status");
});

app.get("/health", async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ ok: true });
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    uptime: process.uptime(), // seconds
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
