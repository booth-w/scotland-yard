# scotland-yard
COM5043 assessment 1

## Local development setup

### Requirements
- Docker Desktop
- Node.js (LTS)

### Start database
docker compose up -d

### Backend
cd server
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev

### Adminer (DB UI)
http://localhost:8080

# Model
* Docker → creates the database
* Prisma → creates the tables
* Node → reads/writes game data
* Adminer → lets you view the DB

