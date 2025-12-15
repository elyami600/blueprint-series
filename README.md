# BluePrint Series Event Website

A full-stack event website built with **Next.js 15 (App Router)** and **Express.js**, featuring dynamic event pages with data fetched from a RESTful API.

## 📁 Project Structure

```
project/
│
├── backend/                         # Express.js API
│   ├── src/
│   │   ├── app.js                   # Express app configuration
│   │   ├── server.js                # Server entry point
│   │   ├── index.js                 # App bootstrap
│   │   ├── controllers/
│   │   │   └── eventController.js   # API business logic
│   │   ├── routes/
│   │   │   └── eventRoutes.js       # API route definitions
│   │   ├── data/
│   │   │   └── mockData.js           # Mock event data (in-memory)
│   │   │
│   │   └── tests/
│   │       └── event.test.js         # Jest + Supertest API tests
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
└── frontend/                        # Next.js App (App Router)
    ├── app/
    │   ├── layout.jsx               # Root layout
    │   ├── page.jsx                 # Homepage (event list)
    │   └── events/
    │       └── [id]/
    │           └── page.js           # Dynamic event detail page
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Introduction.jsx
    │   ├── Agenda.jsx
    │   ├── Speakers.jsx
    │   ├── EventDetails.jsx
    │   ├── PreviousEvents.jsx
    │   ├── FAQ.jsx
    │   ├── FAQItem.jsx
    │   ├── Footer.jsx
    │   ├── Loading.jsx
    │   └── ErrorMessage.jsx
    │
    ├── lib/
    │   └── api.js                   # Frontend API service layer
    │
    ├── public/
    │   └── images/
    │
    ├── styles/
    │   └── globals.css
    │
    ├── .env.local
    ├── package.json
    ├── next.config.js
    ├── tailwind.config.js
    └── postcss.config.js

```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ 
- npm or yarn

### 1. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

**Backend runs on:** `http://localhost:4000`

### 2. Frontend Setup

```bash
# Navigate to frontend folder (open new terminal)
cd frontend

# Install dependencies
npm install

# Create environment file
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:4000" > .env.local

# Start development server
npm run dev
```

**Frontend runs on:** `http://localhost:3000`

---

## 🌐 Available Routes

### Frontend Pages
- **Homepage (Event 1):** `http://localhost:3000`
- **Event 1:** `http://localhost:3000/events/1`
- **Event 2:** `http://localhost:3000/events/2`

### Backend API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/events` | Get all events (list) |
| `GET /api/event/:id` | Get complete event data |
| `GET /api/introduction/:id` | Get event introduction |
| `GET /api/agenda/:id` | Get event agenda |
| `GET /api/speakers/:id` | Get event speakers |
| `GET /api/event-details/:id` | Get event details |
| `GET /api/previous-events/:id` | Get Past Events |
| `GET /api/faq/:id` | Get FAQ items |


## ✨ Features

### Backend Features
- ✅ RESTful API with Express.js
- ✅ Two complete mock events with full data
- ✅ CORS enabled for cross-origin requests
- ✅ Modular data structure
- ✅ Error handling
- ✅ Organized endpoints

### Frontend Features  
- ✅ Next.js 15 App Router
- ✅ Server-side rendering (SSR)
- ✅ Dynamic routing (`/events/[id]`)
- ✅ Responsive design (mobile-first)
- ✅ Gradient hero sections
- ✅ Interactive FAQ accordions
- ✅ Grayscale speaker images
- ✅ Timeline-style agenda
- ✅ Loading states
- ✅ Error handling
- ✅ Fallback data support

---

## 🔧 Configuration Files

### backend/package.json
```json
{
  "name": "blueprint-series-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### frontend/.env.local
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

### frontend/next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```
---

### API Not Connecting

1. ✅ Verify backend is running on port 4000
2. ✅ Check `.env.local` exists with correct URL
3. ✅ Ensure CORS is enabled in `backend/index.js`
4. ✅ Check browser console for errors
5. ✅ Test API directly: `curl http://localhost:4000/api/events`

### Images Not Loading

1. ✅ Add image domains to `next.config.js`
2. ✅ Restart Next.js dev server after config changes
3. ✅ Check image paths in `data/events.js`
4. ✅ Verify images exist in `public/images/`

## 📝 API Response Examples

### GET /api/event/1
```json
{
  "id": 1,
  "title": "The BluePrint Series",
  "subtitle": "A Fireside Chat with Rich Tu",
  "date": "March 20, 2025",
  "location": "New York, NY",
  "introduction": "Join us for an exciting evening...",
  "agenda": [...],
  "speakers": [...],
  "details": "...",
  "faq": [...]
}
```

### GET /api/events
```json
[
  {
    "id": 1,
    "title": "The BluePrint Series",
    "subtitle": "A Fireside Chat with Rich Tu",
    "date": "March 20, 2025",
    "location": "New York, NY",
    "description": "Join us for an intimate conversation..."
  },
  {
    "id": 2,
    "title": "The BluePrint Series",
    "subtitle": "Building Your Personal Brand",
    "date": "April 15, 2025",
    "location": "San Francisco, CA",
    "description": "Learn strategies for building..."
  }
]
```

---

## 📄 File Checklist

### Backend Files ✅
- [x] `backend/index.js`
- [x] `backend/data/events.js`
- [x] `backend/package.json`
- [x] `backend/.gitignore`

### Frontend Files ✅
- [x] `frontend/app/layout.jsx`
- [x] `frontend/app/page.jsx`
- [x] `frontend/app/events/[id]/page.js`
- [x] `frontend/components/Navbar.jsx`
- [x] `frontend/components/Hero.jsx`
- [x] `frontend/components/Introduction.jsx`
- [x] `frontend/components/Agenda.jsx`
- [x] `frontend/components/Speakers.jsx`
- [x] `frontend/components/EventDetails.jsx`
- [x] `frontend/components/FAQ.jsx`
- [x] `frontend/components/FAQItem.jsx`
- [x] `frontend/components/Footer.jsx`
- [x] `frontend/components/Loading.jsx`
- [x] `frontend/components/ErrorMessage.jsx`
- [x] `frontend/.env.local`
- [x] `frontend/next.config.js`
- [x] `frontend/styles/globals.css`

---
## Testing

- **Jest** is used as the unit test runner.
- **Supertest** is used to test backend HTTP API endpoints.
- Backend API endpoints were manually tested using **Postman** and **curl**.
- Verified correct `200` responses for valid event IDs.
- Confirmed proper `404` responses for invalid or missing resources.
- Frontend behavior was tested in the browser to validate loading states, error handling, and dynamic routing.
- Frontend components were validated to ensure proper props usage, conditional rendering, and API-driven state updates.
- Ensured the frontend correctly consumes and renders data from the backend API.

### Run  Testing fronted tests || backend fronted tests
```bash
# Navigate to frontend folder
cd fronted
npm test

# Navigate to backend folder
cd backend 
cd fronted
npm test
```
## 🎯 Development Notes

- **Total Development Time:** Under 2 hours ⏱️
- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **API:** RESTful Express.js
- **Data:** Mock data in JSON format
- **Images:** Placeholder images (Unsplash)

## 📚 Tech Stack

- **Frontend:** Next.js 15, React 18, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Deployment:** Vercel (Frontend), Railway/Render (Backend)

**Built with ❤️ for The Gradient Group, LLC**




