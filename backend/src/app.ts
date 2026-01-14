import express, { Request, Response } from "express";
import path from "path";
import { createServer } from "http";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const app = express();
const server = createServer(app);

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const frontendPath: string = path.join(__dirname, "../../frontend/public");
app.use(express.static(frontendPath));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(frontendPath, "index.html"));
});

app.get("/health", async (req: Request, res: Response) => {
	await prisma.$queryRaw`SELECT 1`;
	res.json({ ok: true });
});

app.get("/status", (req: Request, res: Response) => {
	res.json({
		status: "running",
		uptime: process.uptime(), // seconds
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || "development",
	});
});

const PORT: number = Number(process.env.PORT) || 3000;
server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
