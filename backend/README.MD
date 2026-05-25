# ALU Study Buddy — Backend

FastAPI backend that handles communication between the React frontend and the Claude API.

---

## Tech Stack
- **FastAPI** — Python web framework
- **Uvicorn** — ASGI server that runs the FastAPI app
- **Anthropic SDK** — official Python library for talking to Claude
- **Pydantic** — data validation
- **python-dotenv** — loads environment variables from `.env`

---

## How to Run

```bash
# From the root of the project
source venv/bin/activate
cd backend
uvicorn main:app --reload
```

API will be live at `http://localhost:8000`
Swagger docs at `http://localhost:8000/docs`

---

## File Structure & Purpose

### `main.py`
Entry point of the backend. Creates the FastAPI app, registers CORS middleware so the frontend can talk to the backend, and plugs in the chat router.

### `routes/chat.py`
Defines the `POST /api/chat` endpoint. Receives requests from the frontend, passes them to the Claude service, and returns the response. Handles errors gracefully.

### `models/schemas.py`
Defines the shape of data coming in and going out of the API. Ensures every request has the correct fields before any logic runs. No database — purely for validation.

### `services/claude_service.py`
The core of the application. Contains the three system prompts (Explain, Quiz Me, Summarise), builds the message history with the student's notes as context, and makes the actual call to the Claude API.

### `.env`
Stores the `ANTHROPIC_API_KEY`. Never committed to GitHub.

### `requirements.txt`
Lists all Python dependencies so anyone can recreate the environment with `pip install -r requirements.txt`.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check — confirms the server is running |
| POST | `/api/chat` | Send a message to Claude and get a response |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key from console.anthropic.com |