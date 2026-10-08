# RentRight 🇱🇰

> Multi-Category Item Rental Platform for Sri Lanka.

## Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS (Functional components with hooks)
- **Backend**: Node.js + Express.js (Modular routes, controllers, models, middleware)
- **Database**: PostgreSQL (using `pg` connection pool with `.env` configuration, `snake_case` naming)

---

## Project Structure

```text
RentRight/
├── .gitignore               # Root git ignore (node_modules, .env, dist, logs)
├── README.md                # Project documentation and startup instructions
├── backend/                 # Node.js + Express backend
│   ├── .env.example         # Template for environment variables
│   ├── .env                 # Local environment variables
│   ├── package.json         # Backend dependencies and scripts
│   ├── server.js            # Server entry point
│   ├── config/
│   │   └── db.js            # PostgreSQL connection pool using 'pg'
│   ├── controllers/
│   │   └── healthController.js # Controller for health check
│   ├── routes/
│   │   ├── index.js         # Central API route index (/api)
│   │   └── healthRoutes.js  # /api/health route
│   ├── middleware/
│   │   └── errorHandler.js  # Global 404 & 500 error handlers
│   └── models/
│       └── index.js         # Base database models & query utilities
└── frontend/                # React (Vite) + Tailwind CSS frontend
    ├── index.html           # HTML entry
    ├── package.json         # Frontend dependencies and scripts
    ├── vite.config.js       # Vite configuration with proxy to backend
    ├── tailwind.config.js   # Tailwind CSS configuration
    ├── postcss.config.js    # PostCSS configuration
    └── src/
        ├── App.jsx          # Main functional React component
        ├── index.css        # Tailwind CSS directives
        └── main.jsx         # React root mounting
```

---

## How to Run Locally

### 1. Prerequisites
- **Node.js** (v18 or newer)
- **npm** (v9 or newer)
- **PostgreSQL** (running locally or remotely)

### 2. Backend Setup
1. Open a terminal and navigate to `/backend`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Ensure `backend/.env` exists (copied from `backend/.env.example`):
     ```env
     PORT=5000
     NODE_ENV=development
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=postgres
     DB_PASSWORD=your_postgres_password
     DB_NAME=rentright_db
     JWT_SECRET=your_jwt_secret_key_here
     ```
4. Start the backend server:
   - **Production / Standard mode**:
     ```bash
     npm start
     ```
   - **Development mode** (with auto-reload):
     ```bash
     npm run dev
     ```
5. Verify the backend health check:
   - URL: [http://localhost:5000/api/health](http://localhost:5000/api/health)
   - Expected response:
     ```json
     {
       "success": true,
       "message": "RentRight API running",
       "data": {
         "timestamp": "2026-08-28T...",
         "uptime": 4.12,
         "environment": "development"
       }
     }
     ```

### 3. Frontend Setup
1. In a new terminal window, navigate to `/frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the frontend in your browser:
   - [http://localhost:3000](http://localhost:3000)

---

## Coding Standards & Conventions

1. **Functional React Components**: All frontend components use functional syntax and React hooks (`useState`, `useEffect`, etc.).
2. **Path Separation**: Frontend code lives strictly in `/frontend`, backend code strictly in `/backend`.
3. **Backend Architecture**: Features are organized by `routes/`, `controllers/`, `models/`, and `middleware/`.
4. **API Routing**: All routes are Express Routers prefixed with `/api/` (e.g. `/api/health`).
5. **Standard API Response Shape**:
   ```json
   {
     "success": true,
     "message": "Descriptive message",
     "data": {}
   }
   ```
6. **Database Conventions**: PostgreSQL table and column names strictly adhere to `snake_case` (e.g. `item_provider_id`, `rental_requests`, `created_at`).
7. **Environment Secrets**: Database passwords and JWT secrets are kept in `.env` and excluded from source control.
