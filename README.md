# scotland-yard
COM5043 assessment 1

## Local development setup

### Requirements
* docker & docker compose ([Docker Desktop](https://www.docker.com/products/docker-desktop/) provides both)
* Node.js 20 (LTS)

### Start database

```bash
docker compose up -d
```

### Adminer (DB UI)
http://localhost:8080

### Backend (FIRST TIME)
* cd backend
* cp .env.example .env
* npm install
* npm run migrate
* npm run dev
* Visit: http://localhost:3000/health

### Backend (Daily startup)
* cd backend
* npm run dev

### Server check
http://localhost:3000/ - Index which shows server running and other commands
http://localhost:3000/health - DB connection establishment
http://localhost:3000/status - Endpoint that checks DB tables exist and creations (lobby etc)

### Updated prisma schema?
* npx prisma migrate dev

### Regenerate client if schema changes
* npx prisma generate

# Model
* Docker → creates the database
* Prisma → creates the tables
* Node → reads/writes game data
* Adminer → lets you view the DB

