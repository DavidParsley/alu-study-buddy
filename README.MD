# ALU Study Buddy 🎓

> A Claude-powered study assistant built specifically for African Leadership University students.

ALU Study Buddy helps students understand their course material faster and deeper. Paste your lecture notes, pick a study mode, and chat with an AI tutor that understands ALU's values, mission, and academic integrity standards.

Built for the **ALU Claude Builder Club Hackathon — May 2026.**

---

## What It Does

Students paste their notes or readings into the notes panel, select one of three study modes, and chat with Claude about their material:

- **Explain** — breaks down complex concepts using simple language, analogies, and African real-world examples
- **Quiz Me** — generates practice questions directly from the student's notes and gives constructive feedback on answers
- **Summarise** — distills notes into structured summaries with key concepts, definitions, and an ALU Leadership Link

The app is built around ALU's mission: developing ethical, entrepreneurial leaders who solve Africa's most pressing challenges. Every response reflects that context.

---

## Why It's Different From Just Using Claude

- **ALU-specific context** — system prompts reference ALU's pedagogy, honor code, and leadership mission
- **African examples** — Claude is instructed to use African economies, businesses, and leaders in explanations
- **Academic integrity guardrails** — the app actively refuses to write assignments or essays, explaining why
- **Mode-specific behaviour** — three completely different Claude personas depending on what the student needs
- **Session persistence** — conversations survive page refresh and browser tabs via localStorage
- **Purpose-built UI** — designed around a study workflow, not a general chat interface

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite + TailwindCSS |
| Backend | FastAPI (Python) |
| AI | Anthropic Claude API (`claude-sonnet-4-5`) |
| Icons | Lucide React |
| Markdown | react-markdown |
| Deployment | Vercel (frontend) + Render (backend) |

---

## Project Structure

```
alu-study-buddy/
├── backend/                  # FastAPI backend
│   ├── main.py               # App entry point, CORS, router
│   ├── models/schemas.py     # Pydantic request/response models
│   ├── routes/chat.py        # POST /api/chat endpoint
│   ├── services/             # Claude API logic and system prompts
│   │   └── claude_service.py
│   ├── requirements.txt      # Python dependencies
│   └── README.md             # Backend specific docs
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── App.jsx           # Root component and layout
│   │   ├── components/       # UI components
│   │   ├── hooks/useChat.js  # Chat state and localStorage
│   │   └── utils/api.js      # Backend fetch wrapper
│   ├── package.json
│   └── README.md             # Frontend specific docs
│
└── README.md                 # This file
```

---

## Running Locally

### Prerequisites
- Python 3.10+
- Node.js 18+
- An Anthropic API key from [console.anthropic.com](https://console.anthropic.com)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/alu-study-buddy.git
cd alu-study-buddy
```

### 2. Set up the backend
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt
```

Create `backend/.env`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

Start the backend:
```bash
cd backend
uvicorn main:app --reload
```

Backend runs at `http://localhost:8000`
Swagger docs at `http://localhost:8000/docs`

### 3. Set up the frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## How Claude Is Used

Claude is the core of the product — not a bolt-on feature. Every user interaction goes through a carefully crafted system prompt that:

- Establishes Claude as "ALU Study Buddy" with ALU's specific mission and values
- Instructs Claude to use African real-world examples and contexts
- Enforces academic integrity — Claude will not write assignments, essays, or exam answers
- Changes Claude's entire persona depending on the selected mode (tutor vs coach vs summariser)
- Injects the student's notes as context so every response is grounded in their actual material

---

## Ethical Design

ALU Study Buddy was designed with academic integrity at its core:

- The app refuses to write assignments, citing ALU's honor code and the student's own growth
- A permanent ethics disclaimer is visible at the bottom of every session
- System prompts frame Claude as a learning guide, not an answer machine
- The Summarise mode includes an "ALU Leadership Link" connecting every topic to ethical leadership

---

## Demo

**Live URL:** [your-vercel-url.vercel.app]
**GitHub:** [https://github.com/DavidParsley/alu-study-buddy]

---

## Built By

Solo entry — African Leadership University, Software Engineering
ALU Claude Builder Club Hackathon — May 2026

*Built without Pro account access — separate judging category*