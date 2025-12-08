## Backend – Express API

The backend is a simple Express.js server that serves event data for the Blueprint Series pages.

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install dependencies

From the project root:

```bash
cd backend
npm install
npm run dev

http://localhost:4000



project/
│
├── backend/           # Express.js API
│   ├── data/events.js
│   ├── index.js
│   └── package.json
│
└── frontend/          # Next.js Web App
    ├── app/
    ├── components/
    ├── public/
    └── package.json


Frontend – Next.js App
cd frontend
npm install
npm run dev
http://localhost:3000


Event Routes
/events/1
/events/2
