## AI-Powered Conversational Product Guide

### Project Overview

This project is an AI-powered conversational product recommendation system built as a configurable prototype for Japanese retail brands. It guides customers through a personalised product discovery experience — asking about their goals, preferences, and lifestyle, then recommending tailored product routines — entirely through natural conversation.

The system was designed as a prototype to demonstrate the concept to prospective retail clients, with each brand getting a fully customised experience through configuration alone.

* **Project type:** Prototype / sales demo
* **Intended audience:** Japanese retail brands and their customers

---

### Goal & Intent

The project was initiated to explore how AI conversation could replace or augment traditional product discovery flows in retail — where customers typically navigate category pages or rely on in-store staff.

A central question guiding the work was how to build a system that is:

* **Brand-flexible** — a single codebase that could authentically represent very different brands (beauty, outdoor, wine, sportswear) through configuration alone
* **Analytically useful** — capturing structured engagement data that a brand could act on
* **Demonstrable quickly** — a working prototype that could be shown to clients without requiring backend integration on their side

Beyond showcasing the concept, the goal was to design a real production path: showing how the prototype could scale from demo to live deployment with e-commerce integration layered in over time.

---

### Process

#### System Design

Development began with defining the multi-brand architecture. Rather than building separate apps per brand, a single FastAPI backend reads a `CLIENT` environment variable at startup, loading the corresponding system prompt, brand name, off-topic signals, and tagline from a central registry. The React frontend similarly reads a `VITE_CLIENT` variable and applies brand-specific colour palettes, welcome copy, and icebreaker topics via CSS variables and a JavaScript config.

This approach meant adding a new brand required only a new config block — no code changes.

#### Backend & LLM Integration

The backend was built with FastAPI, managing conversation sessions in memory and routing each message through the Claude API with the brand's system prompt prepended. An off-topic detection layer checks assistant responses for predefined signal phrases, flagging redirected messages for analytics without interrupting the user experience.

#### Frontend

The React chat interface was designed to feel native to each brand — using brand-specific typography, colour themes, and icebreaker chips to set context before the user types anything. The welcome screen mirrors the structure of modern AI assistant products, with a centred hero, subtitle, and a grid of suggested prompts.

#### Analytics Layer

To make the prototype credible as a business tool, a Databricks-on-AWS analytics pipeline was designed alongside the chat system. The architecture follows the Medallion pattern (Bronze → Silver → Gold), ingesting chat events from FastAPI into S3, processing them through Delta Lake, and surfacing KPIs in a Databricks AI/BI dashboard. A mock dashboard was also built in HTML/Chart.js to demonstrate the metrics a brand partner would care about — sessions, off-topic rate, daily stack generation, and (with brand API access) conversion rate and attributed revenue.

---

### Challenges & Learnings

#### Making one system feel like many brands

The hardest UX challenge was ensuring the product felt genuinely on-brand for each client, not just relabelled. The solution was a layered config system: system prompts written in each brand's voice and language (Japanese for most), CSS variables for colour and typography, and brand-specific icebreaker copy written to match each brand's tone.

#### Separating what the prototype can prove from what needs integration

A key design decision was clearly distinguishing between metrics available from day one (engagement, session depth, off-topic rate) and metrics that require brand API access (conversion, revenue attribution). This shaped both the analytics dashboard design and the client pitch — allowing an honest demonstration of immediate value without overpromising.

#### Cost modelling at scale

Estimating realistic operating costs at 250K MAU surfaced that the Claude API accounts for ~96% of total cost at scale. This informed the decision to use Haiku (the most cost-efficient Claude model) and to design the system with prompt caching in mind — projecting ~$0.04 cost per MAU per month.

---

### Output

#### Final system

* FastAPI Python backend with multi-brand config registry and Claude API integration
* React frontend with per-brand theming, icebreaker chips, and markdown-rendered assistant responses
* In-memory session management with event logging for analytics
* Mock analytics dashboard demonstrating engagement and commerce KPIs
* Databricks-on-AWS pipeline architecture document and development plan

#### User experience

For customers, the interaction feels like talking to a knowledgeable brand advisor. The system asks focused questions, builds context across the conversation, and delivers a personalised routine or recommendation in a structured format — typically a markdown table. Off-topic questions are redirected gracefully in the brand's voice.

#### Media

* Video documentation: *to be added*

---

### Technical / Architecture Description

#### System overview

A React frontend communicates with a FastAPI backend over REST. The backend manages session state, prepends the active brand's system prompt, and calls the Claude API. Events are logged for analytics. Brand identity is loaded entirely through environment variables — no database, no dynamic config fetch.

#### Data flow

1. User opens the chat UI; brand config is loaded from `VITE_CLIENT` env variable
2. User sends message; React POSTs to `/api/chat` with session ID and message
3. FastAPI retrieves conversation history, constructs the full message list, calls Claude API
4. Response is returned to the frontend, off-topic flag is evaluated, event is logged
5. Analytics pipeline: FastAPI → AWS S3 (raw events) → Delta Lake Bronze/Silver/Gold → Databricks SQL Warehouse → AI/BI Dashboard

```
┌─────────────────────────────────┐
│         React Frontend          │
│  Brand-themed chat UI           │
│  Icebreaker chips               │
│  Markdown rendering             │
└────────────────┬────────────────┘
                 │  REST (POST /api/chat)
                 ▼
┌─────────────────────────────────┐
│        FastAPI Backend          │
│  Multi-brand config registry    │
│  Session management             │
│  Off-topic detection            │
│  Event logging                  │
└────────┬────────────────┬───────┘
         │                │
         ▼                ▼
┌────────────────┐  ┌─────────────────────────────┐
│   Claude API   │  │     AWS S3 + Databricks     │
│  (Haiku model) │  │  Bronze → Silver → Gold     │
│  System prompt │  │  SQL Warehouse + AI/BI Dash │
└────────────────┘  └─────────────────────────────┘
```

**Technologies**

* Backend: Python, FastAPI, Pydantic, Anthropic Claude API
* Frontend: React, Vite, Axios, react-markdown
* Analytics: Databricks (Delta Lake, Jobs Compute, SQL Warehouse, AI/BI), AWS S3
* Configuration: Environment variables, YAML-style Python dataclasses

**GitHub**

https://github.com/sonostudio/llm-product-guide

---

### Technology Reusability & Other Use Cases

#### Reusable components

* Multi-brand/multi-tenant LLM chat architecture
* Off-topic detection layer for brand-safe AI interactions
* Event logging schema for downstream analytics pipelines
* Medallion architecture pipeline template for chat applications

#### Alternative applications

##### Internal knowledge assistants

The same architecture can power internal-facing tools — onboarding assistants, HR policy chatbots, or product training guides — where the "brand" is a department and the system prompt encodes internal knowledge. The multi-tenant config approach maps naturally to multi-department or multi-region deployments.

##### E-commerce product discovery

With a RAG layer and product catalogue integration, the prototype scales to a fully functional e-commerce guide — surfacing specific SKUs, live inventory, and personalised recommendations. The analytics layer is already designed to track conversion attribution once commerce API access is available.

#### Client value

This system demonstrates how conversational AI can move retail product discovery from passive browsing to active dialogue — increasing engagement depth, surfacing relevant products faster, and generating structured analytics that static pages cannot. The configurable architecture means a single engineering investment serves multiple brand deployments.