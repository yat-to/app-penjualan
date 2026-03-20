## 🧩 Tech Stack

This project consists of two main parts that are fully integrated:

### 🚀 Client (Frontend)

The frontend is built using:

* **Next.js** → React framework for SSR and SPA
* **Tailwind CSS** → Utility-first CSS framework for fast and responsive UI

Main responsibilities:

* Provide user interface (UI/UX)
* Handle user interactions
* Consume API from the backend

---

### ⚙️ Server (Backend)

The backend is built using:

* **Fastify** → High-performance Node.js web framework

Main responsibilities:

* Provide REST API
* Handle business logic
* Connect to database
* Validate and process data

---

## 📁 Project Structure

```
project-root/
│
├── client/   # Frontend (Next.js + Tailwind CSS)
└── server/   # Backend (Fastify)
```

---

## 🔗 Architecture

The frontend (Next.js) communicates with the backend (Fastify) via REST API using HTTP requests (e.g., fetch).
Data is exchanged in JSON format for efficiency and simplicity.

---

## ⚙️ Prerequisites

Make sure you have installed:

* Node.js (recommended LTS version)
* Package manager: npm / yarn / pnpm

Check versions:

```
node -v
npm -v
```

---

## 🚀 Installation & Setup

### 1. Clone Repository

```
git clone <your-repository-url>
cd <your-project-name>
```

---

### 2. Setup Backend (Server - Fastify)

Navigate to server directory:

```
cd server
```

Install dependencies:

```
npm install
```

Run the server:

```
npm run dev
```

or if no dev script is available:

```
node index.js
```

Server will run at:

```
http://localhost:3000
```

---

### 3. Setup Frontend (Client - Next.js)

Open a new terminal, then:

```
cd client
```

Install dependencies:

```
npm install
```

Run the frontend:

```
npm run dev
```

Access in browser:

```
http://localhost:3001
```

*(or default Next.js port 3000 if not in use)*

---

## 📌 Notes

* Make sure the backend is running before starting the frontend
* Use `fetch` or any HTTP client to communicate with the API
* Adjust ports if there are conflicts

---

## 📄 License

This project is intended for internal development purposes.
