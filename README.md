# Spart Studio Trial Application

A simple full-stack web application built using React and Express.js, this app fetches and displays a list of items from a REST API hosted at "/get".

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express.js
- **API:** REST [GET /items]

## Project Structure

```text
sparkstudio-trial/
├── frontend/    # React application
├── backend/     # Express.js API
└── README.md
```

## Setup and Installation

### 1. Clone the repository

```bash
git clone git@github.com:REGEX777/sparkstudio-trial.git
cd sparkstudio-trial
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Start the backend server:

```bash
node app.js
```

The backend will run at `http://localhost:3000`.

### 3. Setup the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`.

## API Endpoint

GET `/items` => Returns a JSON array of items

Example response:

```json
[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" }
]
```

## Usage

1. Start both the backend and frontend servers.
2. Open `http://localhost:5173` in your browser.
3. The application fetches items from the backend API and displays their IDs and names.

