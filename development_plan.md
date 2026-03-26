# iHerb — Conversational Supplement Guide
## System Architecture & Prototype Development Plan

**Date:** March 9, 2026  
**Prepared by:** Sono Studio · n@sonostud.io · sonostud.io  
**Scope:** Prototype — Local (Analytics data layer: Databricks on AWS)

---

## 1. Prototype Overview

This document defines the system architecture and development plan for the iHerb Conversational Supplement Guide prototype. The prototype focuses on two core experiences: the customer-facing Chat UI and the internal Analytics Dashboard. Product matching will use raw LLM (Claude API) for the prototype, with a full RAG/SKU pipeline introduced in production.

### In Scope (Prototype)
- Customer-facing Chat UI
- Analytics Dashboard (mock data)
- FastAPI Python backend
- Claude API integration
- Local development only

### Out of Scope (Production)
- RAG / Vector DB / SKU matching
- iHerb live API integration
- User authentication / profiles
- Real-time inventory checks
- Cloud deployment

---

## 2. System Architecture

The prototype follows a clean client–server architecture with four distinct layers. The React frontend communicates with the FastAPI backend via REST API. The backend orchestrates calls to the Claude API (LLM layer) and reads/writes from a lightweight local data layer.

| Layer | Description | Technologies |
|---|---|---|
| **React Frontend** | Chat UI + Analytics Dashboard | React + TypeScript, Tailwind CSS, Recharts, Axios |
| **FastAPI Backend** | REST API layer + LLM orchestration | FastAPI, Pydantic, Uvicorn, Session management |
| **LLM / AI Layer** | Claude API — conversational intelligence | Anthropic Claude API, Prompt engineering, Conversation history *(RAG engine — production)* |
| **Data Layer** | Session store + analytics data warehouse | In-memory session store, Mock product catalog (JSON), SQLite for chat logs, **Databricks on AWS** (Delta Lake + SQL Warehouse for analytics) *(iHerb DB — production)* |

### 2.1 Data Flow

#### Chat Request Flow
1. User types message in React Chat UI
2. React sends `POST /api/chat` with `{ session_id, message }`
3. FastAPI retrieves conversation history from session store
4. FastAPI constructs prompt with history + system context
5. Claude API returns AI response
6. FastAPI stores exchange, returns response to React
7. Chat UI renders assistant message + any product suggestions

#### Analytics Request Flow
1. Dashboard component mounts, fires `GET /api/analytics/overview`
2. FastAPI reads from `mock_analytics.json`
3. Returns structured JSON: metrics, trends, funnel, demographics
4. React renders charts via Recharts library
5. Dashboard auto-refreshes on configurable interval

---

## 2.2 Analytics Data Layer — Databricks on AWS

### Platform Decision

After evaluating Databricks vs. AWS-native options (QuickSight / Quick Suite), **Databricks on AWS** is the recommended choice for the analytics data layer.

| Criteria | Databricks on AWS | AWS Quick Suite |
|---|---|---|
| **Dashboard quality** | ✅ AI/BI with Genie spaces, cross-filtering, SQL-native | ⚠️ Lighter BI tooling, agentic but less data-engineering depth |
| **Data engineering** | ✅ Delta Lake, Jobs Compute, streaming + batch in one place | ⚠️ Requires separate Glue/Kinesis setup |
| **Pricing** | ✅ Most competitive DBU rates among cloud providers | ✅ Session-based pricing, lower floor for casual use |
| **Future ML / RAG** | ✅ Native MLflow, Mosaic AI — easy path to production RAG | ⚠️ Requires SageMaker for ML workloads |
| **Fit for this project** | ✅ Strong — analytics + future ML in one platform | ⚠️ Would need extra services as project grows |

### Databricks Architecture

```
FastAPI Backend
      │
      ▼
  AWS S3 (raw event storage)
      │  (ingestion via Jobs Compute)
      ▼
 Delta Lake (Bronze → Silver → Gold)
      │
      ▼
Databricks SQL Warehouse
      │
      ▼
  Databricks AI/BI Dashboard  ←── iHerb internal team
```

### Data Pipeline (Medallion Architecture)

| Layer | Contents | Update Frequency |
|---|---|---|
| **Bronze** | Raw chat session events (JSON) from FastAPI | Real-time / micro-batch |
| **Silver** | Cleaned, structured events: sessions, messages, intent tags | Every 15 min |
| **Gold** | Aggregated KPIs: funnel metrics, trend counts, demographics | Hourly |

### Cost Considerations

- Use **Jobs Compute** for ingestion pipelines (cheapest compute type, ~$0.15/DBU)
- Use **SQL Warehouse (serverless)** only for dashboard queries — auto-suspends when idle
- Use **Spot Instances** for non-critical batch jobs (up to 90% cost reduction on EC2)
- Expected monthly cost at prototype scale (low query volume): **~$50–150/month** combined DBU + EC2

### Key Databricks Services Used

- **Delta Lake** — ACID-compliant storage on S3, time travel for debugging
- **Databricks SQL Warehouse** — serves dashboard queries
- **AI/BI Dashboards** — built-in low-code dashboard for iHerb team
- **Databricks Jobs** — scheduled ingestion pipeline from FastAPI events
- **Unity Catalog** — data governance and access control (production)

---

## 3. API Design

All endpoints are served by the FastAPI backend on `http://localhost:8000`. The React frontend runs on `http://localhost:3000` with a proxy configured to the backend.

| Method | Endpoint | Description | Consumer |
|---|---|---|---|
| `POST` | `/api/chat` | Send user message, receive AI response | Chat UI |
| `GET` | `/api/chat/history/{session_id}` | Retrieve conversation history | Chat UI |
| `DELETE` | `/api/chat/history/{session_id}` | Clear conversation session | Chat UI |
| `GET` | `/api/analytics/overview` | Summary metrics (mock data) | Dashboard |
| `GET` | `/api/analytics/trends` | Health concern trends over time | Dashboard |
| `GET` | `/api/analytics/funnel` | Conversion funnel metrics | Dashboard |
| `GET` | `/api/analytics/demographics` | Regional traffic breakdown | Dashboard |

### 3.1 Key Request/Response Schemas

#### `POST /api/chat`

**Request Body:**
```json
{
  "session_id": "string (UUID)",
  "message": "string — user's natural language input"
}
```

**Response Body:**
```json
{
  "session_id": "string",
  "response": "string — Claude's reply",
  "suggestions": "list[ProductSuggestion] — empty in prototype, used in production",
  "timestamp": "datetime"
}
```

---

## 4. Frontend Component Architecture

The React frontend is organized around two primary page views: the Chat Interface and the Analytics Dashboard. Components are structured for reuse and clear separation of concerns.

### Chat UI Components
- `ChatPage` — top-level page
- `MessageList` — renders history
- `MessageBubble` — single message
- `InputBar` — text input + send
- `IcebreakerTags` — quick-start topics
- `TypingIndicator` — loading state

### Dashboard Components
- `DashboardPage` — top-level page
- `MetricCard` — KPI summary tiles
- `ConversionFunnel` — funnel chart
- `TrendChart` — health concern trends
- `DemographicsMap` — regional traffic
- `ExportButton` — report download

### 4.1 State Management

For the prototype, React built-in state (`useState` / `useContext`) is sufficient. No external state library (Redux, Zustand) is required at this stage.

- `ChatContext` — holds `messages[]`, `sessionId`, loading state
- `AnalyticsContext` — holds fetched metrics, date range filter
- `useChat()` hook — encapsulates API calls for chat endpoints
- `useAnalytics()` hook — encapsulates API calls for dashboard endpoints

---

## 5. Project Directory Structure

```
iherb-prototype/
├── backend/                        # Python FastAPI application
│   ├── main.py                     # FastAPI app entry point
│   ├── routers/                    # Route handlers
│   │   ├── chat.py                 # Chat endpoint logic
│   │   └── analytics.py           # Analytics endpoint logic
│   ├── services/                   # Business logic layer
│   │   ├── llm.py                  # Claude API integration
│   │   └── session.py             # Session management
│   ├── models/                     # Pydantic data models
│   ├── data/                       # Mock data files
│   │   └── mock_analytics.json    # Simulated analytics data
│   └── requirements.txt           # Python dependencies
├── frontend/                       # React application
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Chat/              # Chat UI components
│   │   │   └── Dashboard/         # Analytics dashboard components
│   │   ├── pages/                 # Top-level page views
│   │   ├── hooks/                 # Custom React hooks
│   │   └── api/                   # API client functions
│   └── package.json               # Node dependencies
└── README.md                       # Setup & run instructions
```

---

## 6. Development Timeline

The project is delivered in two sequential launches. **Launch 1** delivers Feature #1 (Interactive Health Consultation) within 7 weeks, giving iHerb an early working product. Remaining chat features follow as incremental releases. **Launch 2** delivers the full analytics dashboard 4 weeks after Launch 1.

---

### 🚀 Launch 1 — Chat Web App, Feature #1 only (Weeks 1–7)

**Scope:** Interactive Health Consultation only — chat input, Claude API response, basic conversation flow. No icebreakers, no auth, no stack formatting, no cart integration.

| | Weeks 1–2 | Weeks 3–5 | Week 6 | Week 7 |
|---|---|---|---|---|
| **Focus** | Discovery & Setup | Backend + LLM | Frontend | QA & Launch |
| **Actions** | Finalize API contracts & data models, set up repo & dev environment | Build FastAPI app, chat endpoints, Claude API integration, session management | Build Chat UI, message history, React routing | End-to-end testing, red-teaming, staging deploy |
| **Deliverable** | Architecture sign-off, dev environment ready | Working chat API with Claude responses | Functional chat UI | **Live chat app (Japan)** |

> 💡 **5 weeks saved** vs. the original 12-week plan — ships a focused v1 faster and leaves room for iterative feature releases.

---

### 📋 Feature Roadmap (Post Launch 1)

Subsequent features are released incrementally after Launch 1, ordered by implementation complexity. All estimates are solo.

| # | Feature | Estimate | Notes |
|---|---|---|---|
| **1** | Interactive Health Consultation | **6–7 weeks** | ✅ Launch 1 scope — backend + frontend + Claude integration + QA |
| **2** | Contextual Icebreakers | **1 week** | Purely frontend — clickable tag components prepopulate chat input |
| **4** | Daily Stack Routine | **2–3 weeks** | Prompt engineering for structured output + intake schedule UI rendering |
| **3** | Profile Integration & Memory | **3–4 weeks** | Auth system, login flow, conversation history persistence |
| **5** | Frictionless Checkout | **3–4 weeks** | Depends on iHerb cart API access — integration complexity TBD |

> 💡 Features #2 and #4 are quick wins that can be bundled into a **v1.1 release** shortly after Launch 1. Features #3 and #5 are heavier lifts and should each be their own dedicated release.

---

### 📊 Launch 2 — Analytics Dashboard (Weeks 8–11)

| | Week 8 | Week 9 | Week 10 | Week 11 |
|---|---|---|---|---|
| **Focus** | Infrastructure Setup | Ingestion Pipeline | Gold Layer + Warehouse | Dashboard Build & QA |
| **Actions** | AWS S3 + IAM config, Databricks workspace setup, Delta Lake schema design (Bronze/Silver/Gold) | FastAPI → S3 event logging, Bronze → Silver ingestion jobs, schema validation | Gold layer KPI aggregations (funnel, trends, demographics), SQL Warehouse setup, access controls | Databricks AI/BI dashboard build (funnel + trends + demographics), end-to-end testing, stakeholder review |
| **Deliverable** | Databricks workspace live, schemas defined | Live ingestion pipeline from chat app | Queryable Gold tables in Databricks | **Live analytics dashboard** |

> ⚠️ **Risk note:** Week 14 (ingestion pipeline) is the highest-risk week — IAM permission issues or Delta Lake schema mismatches can cause delays. If Week 14 slips, treat Week 16 as buffer for pipeline fixes only, and defer any dashboard enhancements to a follow-up iteration. No new features should be added in Week 16.

---

### Dashboard Mockups (Pre-Launch 2)

Prior to the analytics pipeline being built, wireframe mockups will be shared with iHerb to align on dashboard layout and KPIs. These will cover:

- **Overview** — total chats, active users, regional traffic
- **Conversion Funnel** — chats → add to cart → checkout
- **Trend Map** — top health concerns by week
- **Demographics** — regional breakdown (focus: Japan)

---

## 7. Next Steps

### Immediate (Launch 1 — Feature #1 only)
1. Review and approve this architecture document with client
2. Set up project scaffolding: FastAPI backend + React frontend boilerplate
3. Implement chat endpoint with Claude API integration
4. Build Chat UI with message history
5. QA, staging deploy, and Launch 1 go-live (Week 7)

### Post Launch 1 (Launch 2 prep)
6. Set up AWS S3 + IAM + Databricks workspace (Week 8)
7. Implement event ingestion pipeline: FastAPI → S3 → Delta Lake Bronze/Silver (Week 9)
8. Build Gold layer aggregations + Databricks SQL Warehouse (Week 10)
9. Build Databricks AI/BI dashboard + QA + Launch 2 go-live (Week 11)

### Prototype / Pre-sales
- Share dashboard mockup wireframes with iHerb ahead of Launch 2 to align on KPIs and layout


---

## 8. Operational Cost Estimate

The following is a monthly cost estimate for production operation at **250,000 Monthly Active Users (MAU)**.

### Usage Assumptions

| Metric | Value |
|---|---|
| Sessions per user / month | 3 |
| Messages per session | 6 |
| Total sessions / month | 750,000 |
| Total messages / month | 4,500,000 |

### Monthly Cost Breakdown

| Component | Service | Monthly Cost |
|---|---|---|
| **Claude API** | Haiku 4.5 — input + output tokens, after prompt caching | **$10,215** |
| **FastAPI Backend** | AWS EC2 2× t3.large (HA setup) | **$120** |
| **Event Log Storage** | AWS S3 Standard | **$5** |
| **Databricks** | Jobs Compute (ingestion pipeline) + SQL Warehouse (dashboard) | **$276** |
| **Misc AWS** | Load balancer, CloudWatch, data egress | **$40** |
| **Total / month** | | **~$10,656** |
| **Total / year** | | **~$127,872** |
| **Cost per MAU / month** | | **~$0.04** |

### Key Notes

**Claude API accounts for ~96% of total cost.** This is expected for LLM-powered applications. Haiku 4.5 is already the most cost-efficient Claude model, and further savings of 20–30% are achievable by caching the system prompt (which is repeated on every request).

**Databricks cost is minimal at this scale** ($276/month) due to the internal-only dashboard with light query volume. This will grow if analyst headcount or pipeline frequency increases significantly.

**Costs scale linearly with usage.** If actual sessions or messages per user are higher than assumed, the Claude API line scales proportionally. This should be validated against iHerb's real usage data once the app is live.

---

*Prepared by Sono Studio · n@sonostud.io · sonostud.io*