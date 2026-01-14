# scotland-yard

COM5043 assessment 1

## Local development setup

### Requirements

* docker & docker compose ([Docker Desktop](https://www.docker.com/products/docker-desktop/) provides both)
* Node.js 20 (LTS)

### Start database
### Installation instructions

```bash
git clone https://github.com/booth-w/scotland-yard
docker compose up -d
cd backend
cp .env.example .env
npm install
npm run migrate
```

### Adminer (DB UI)
http://localhost:8080
### Running the server

### Backend (FIRST TIME)
* cd backend
* cp .env.example .env
* npm install
* npm run migrate
* npm run dev
* Visit: http://localhost:3000/health
```bash
cd backend
npm run dev
```

Visit http://localhost:3000/health to confirm the server is running and connected to the database.

### Adminer (DB UI)

### Backend (Daily startup)
* cd backend
* npm run dev
http://localhost:8080

### Server check

http://localhost:3000/ - Index which shows server running and other commands

http://localhost:3000/health - DB connection establishment

http://localhost:3000/status - Endpoint that checks DB tables exist and creations (lobby etc)

### Updated prisma schema?
* npx prisma migrate dev

* npm run migrate

### Regenerate client if schema changes
* npx prisma generate

# Model
* npm run generate

## Model
* Docker → creates the database
* Prisma → creates the tables
* Node → reads/writes game data
* Adminer → lets you view the DB

