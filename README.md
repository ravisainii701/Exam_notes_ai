## 📚 ExamNotes AI: AI-Powered Exam Notes Generator

## 📌 Overview

ExamNotes AI is a full-stack MERN application that turns any topic into exam-focused study material in seconds. Students enter a topic, class level, and exam type, and the app uses Google Gemini to generate structured notes with priority-wise sub-topics, revision points, expected short and long questions, Mermaid diagrams, and charts. Notes are saved to a personal history and can be downloaded as a PDF. A credit system with Stripe payments keeps usage sustainable.

## 🚀 Why It Matters

🎓 **Exam Prep Needs Focus, Not More Content**
→ Students often waste time deciding what to study. Priority-tagged sub-topics (⭐ Very Important, ⭐⭐ Important, ⭐⭐⭐ Frequently Asked) point them to what matters most.

⚡ **Revision Mode for Last-Minute Study**
→ A one-click revision mode produces short, bullet-only cheat-sheet notes, perfect for the last day before an exam.

📊 **Visual Learning Improves Retention**
→ Auto-generated flow diagrams and charts help students understand processes and weightage at a glance.

## 🏗 Project Structure

```text
📂 Exam_notes_ai
├── 📂 server  (Node.js, Express & MongoDB API)
│   ├── index.js  (Express server entry point, CORS & Stripe webhook setup)
│   ├── package.json  (Backend dependencies)
│   ├── .gitignore
│   ├── 📂 controllers
│   │   ├── auth.controller.js  (Google auth & logout)
│   │   ├── user.controller.js  (Get current user)
│   │   ├── generate.controller.js  (AI notes generation & credit deduction)
│   │   ├── notes.controller.js  (Notes history & single note fetch)
│   │   ├── pdf.controller.js  (PDF export using PDFKit)
│   │   ├── credits.controller.js  (Stripe checkout & webhook)
│   ├── 📂 middleware
│   │   ├── isAuth.js  (JWT cookie authentication middleware)
│   ├── 📂 models
│   │   ├── user.model.js  (User schema: name, email, credits, notes)
│   │   ├── notes.model.js  (Notes schema: topic, options, AI content)
│   ├── 📂 routes
│   │   ├── auth.route.js  (Auth endpoints)
│   │   ├── user.route.js  (User endpoints)
│   │   ├── genrate.route.js  (Notes generation & history endpoints)
│   │   ├── pdf.route.js  (PDF endpoint)
│   │   ├── credits.route.js  (Credits purchase endpoint)
│   ├── 📂 services
│   │   ├── gemini.services.js  (Google Gemini API integration)
│   ├── 📂 utils
│   │   ├── connectDb.js  (MongoDB connection)
│   │   ├── promptBuilder.js  (Builds the strict-JSON exam notes prompt)
│   │   ├── token.js  (JWT helper)
│
├── 📂 client  (React.js + Redux + TailwindCSS + Vite)
│   ├── index.html  (Base HTML file)
│   ├── package.json  (Frontend dependencies)
│   ├── vite.config.js  (Vite & Tailwind configuration)
│   ├── eslint.config.js  (ESLint configuration)
│   ├── README.md  (Default Vite readme)
│   ├── .gitignore
│   ├── 📂 public
│   │   ├── logo.png  (Favicon & logo)
│   ├── 📂 src
│   │   ├── App.jsx  (Main component & routing)
│   │   ├── main.jsx  (React entry point)
│   │   ├── App.css  (Component styling)
│   │   ├── index.css  (Global TailwindCSS styling)
│   │   ├── 📂 assets  (logo.png, img1.png)
│   │   ├── 📂 components
│   │   │   ├── Navbar.jsx  (Top navigation & credits display)
│   │   │   ├── Footer.jsx  (Footer)
│   │   │   ├── TopicForm.jsx  (Topic input, options & progress loader)
│   │   │   ├── FinalResult.jsx  (Generated notes display)
│   │   │   ├── Sidebar.jsx  (Quick exam view: sub-topics & questions)
│   │   │   ├── MermaidSetup.jsx  (Renders Mermaid diagrams)
│   │   │   ├── RechartSetUp.jsx  (Renders bar, line & pie charts)
│   │   ├── 📂 pages
│   │   │   ├── Auth.jsx  (Google sign-in page)
│   │   │   ├── Home.jsx  (Notes generator)
│   │   │   ├── History.jsx  (Previously generated notes)
│   │   │   ├── Notes.jsx  (Single saved note view)
│   │   │   ├── Pricing.jsx  (Credit plans)
│   │   │   ├── PaymentSuccess.jsx  (Payment success page)
│   │   │   ├── PaymentFailed.jsx  (Payment failed page)
│   │   ├── 📂 redux
│   │   │   ├── store.js  (Redux store configuration)
│   │   │   ├── userSlice.js  (User & credits state)
│   │   ├── 📂 services
│   │   │   ├── api.js  (Axios API calls)
│   │   ├── 📂 utils
│   │   │   ├── firebase.js  (Firebase Google Auth config)
│
└── 📖 README.md  (Project documentation)
```

## 🚀 Features

- ✅ **Google Sign-In**: Secure login with Firebase Google Auth and cookie-based JWT sessions.
- ✅ **AI Notes Generation**: Exam-focused notes generated with Google Gemini as structured JSON.
- ✅ **Customizable Output**: Choose topic, class level, exam type, revision mode, diagrams, and charts.
- ✅ **Priority-Wise Sub-Topics**: Topics grouped as ⭐ Very Important, ⭐⭐ Important, and ⭐⭐⭐ Frequently Asked.
- ✅ **Revision Mode**: Short, bullet-only cheat-sheet notes for quick last-minute revision.
- ✅ **Diagrams & Charts**: Mermaid flow diagrams and Recharts bar, line, and pie charts.
- ✅ **Expected Questions**: Short and long answer questions generated for every topic.
- ✅ **PDF Download**: Export generated notes as a PDF using PDFKit.
- ✅ **Notes History**: Every generated note is saved and can be reopened anytime.
- ✅ **Credit System**: New users get 50 free credits, and each generation costs 10 credits. Extra credits can be bought via Stripe.

## 🔧 Tech Stack

- **Frontend:** React.js, Redux Toolkit, React Router, TailwindCSS, Vite, Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **AI:** Google Gemini API
- **Authentication:** Firebase (Google Auth), JWT, cookie-parser
- **Payments:** Stripe Checkout & Webhooks (INR)
- **Visualization:** Mermaid (diagrams), Recharts (charts), React Markdown
- **PDF Generation:** PDFKit
- **HTTP Client:** Axios

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ravisainii701/Exam_notes_ai.git
cd Exam_notes_ai
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
```

### 4️⃣ Set Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

## 📌 Steps to Run the Project

### 5️⃣ Run the Backend Server

```bash
cd server
npm run dev
```

The API will be available at: http://localhost:5000

### 6️⃣ Run the Frontend

```bash
cd client
npm run dev
```

Frontend will be available at: http://localhost:5173

### 7️⃣ (Optional) Test Stripe Webhooks Locally

```bash
stripe listen --forward-to localhost:5000/api/credits/webhook
```

Copy the webhook signing secret it prints into `STRIPE_WEBHOOK_SECRET`.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/auth/google` | Google sign-in / create user |
| GET | `/api/auth/logout` | Log out the user |
| GET | `/api/user/currentuser` | Get current logged-in user |
| POST | `/api/notes/generate-notes` | Generate AI exam notes (costs 10 credits) |
| GET | `/api/notes/getnotes` | Get all notes of the logged-in user |
| GET | `/api/notes/:id` | Get a single saved note |
| POST | `/api/pdf/generate-pdf` | Download generated notes as PDF |
| POST | `/api/credit/order` | Create a Stripe checkout session for credits |
| POST | `/api/credits/webhook` | Stripe webhook to add credits after payment |

## 💳 Credit Plans

| Price (INR) | Credits |
|-------------|---------|
| ₹100 | 50 |
| ₹200 | 120 |
| ₹500 | 300 |

## 🚀 Deployment

### 🌍 Backend Deployment (Node.js/Express)

```bash
cd server
npm start
```

- Use Render, Railway, AWS EC2, or DigitalOcean to host the backend.
- Set all required environment variables in your hosting provider's dashboard.
- Set `CLIENT_URL` to your deployed frontend URL so CORS and cookies work correctly.
- Add your deployed `/api/credits/webhook` URL in the Stripe dashboard.

### 🖥 Frontend Deployment (React + Vite)

**Deploy on Vercel**

```bash
cd client
npm install -g vercel
vercel login
vercel deploy
```

**Deploy on Netlify**

```bash
cd client
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

Set `VITE_API_URL` to your deployed backend URL in the hosting provider's environment settings.

## 🌱 How It Works

1️⃣ Sign in with your Google account and get 50 free credits.
2️⃣ Enter a topic and choose class level, exam type, revision mode, diagrams, or charts.
3️⃣ The backend builds a strict prompt and sends it to Google Gemini.
4️⃣ Gemini returns structured notes with sub-topics, revision points, questions, diagrams, and charts.
5️⃣ Read, revise, and download the notes as a PDF, and find them later in your history.

## 🛠 Future Roadmap

- 📱 Mobile app for studying on the go
- 🌍 Multi-language notes support
- 🧠 Quiz and flashcard generation from notes
- 📊 Study progress and analytics dashboard

## 🤝 Real-World Use Cases

- 🎓 **School & College Students:** Quickly prepare notes for any subject before exams.
- 🧑‍🏫 **Teachers & Tutors:** Generate structured revision material for classes.
- 📝 **Competitive Exam Aspirants:** Get priority-wise topics and expected questions.

## 🤝 Contributing

We welcome contributions from the community! Feel free to:

- Fork the repository
- Create a pull request with your changes
- Report issues or suggest improvements

## 📜 License

This project currently has no license file. Add a LICENSE file (e.g. MIT) to clarify usage terms.

**🚀 Study smarter, not harder with AI! 📚**
