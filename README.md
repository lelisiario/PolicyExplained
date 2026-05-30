# 🏛️ Policy Explained [In Active Development]

A comprehensive, full-stack civic technology platform designed to bridge the gap between complex federal data systems and everyday citizens. Policy Explained aggregates, simplifies, and tracks federal legislative data, executive actions, judicial updates, and voting records into a secure, accessible, single-source dashboard.

---

## 🗺️ Engineering Roadmap & Project Status

To maintain full transparency and keep development milestones on track, the platform features are broken down by implementation phase.

| Phase | Component | Status | Target Tech |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Project Scope, UI Framework, & Basic Layout | **Complete** | HTML5, CSS3, React |
| **Phase 2** | User Identity & Secure Authentication | **In Progress** | OAuth, Node.js, Express |
| **Phase 3** | Third-Party API Engineering & Data Pipelines | **Planned** | REST APIs, JSON Parsing |
| **Phase 4** | Advanced Features & Notification Pipelines | **Planned** | Twilio/SendGrid, Web Security |
| **Phase 5** | AI Integration & Accessibility Audits | **Planned** | LLM API, ARIA compliance |

---

## 🛠️ Target Technical Stack & Infrastructure

*   **Frontend UI:** React, HTML5, Responsive CSS3
*   **Backend Runtime:** Node.js, Express.js
*   **Security & Identity:** OAuth Protocol, HTTPS Enforcement
*   **Data Strategy:** REST APIs, Complex JSON Parsing, SQL/NoSQL Caching
*   **Integrations:** External Public Legislative APIs, AI Language Model Endpoints

---

## 📋 Comprehensive Functional Specifications (User Stories & Acceptance Criteria)

This section serves as the master blueprint for application logic and feature execution.

### 🔐 1. Identity & Security (Active Focus Phase)
*   **User Login (Authentication):** 
    *   *WHEN* I use the secure login interface,
    *   *THEN* the system authenticates my identity via OAuth and establishes a secure user session.
*   **Data Tracking (Persistence):** 
    *   *WHEN* I am successfully logged into my session and click "Track,"
    *   *THEN* the application writes that specific legislative ID to my database profile so I can track it over time.
*   **Personalized Dashboard:** 
    *   *WHEN* I navigate to my dashboard while logged in, 
    *   *THEN* the system reads my unique user profile from the database and displays my tracked legislation at a glance.
*   **Security Guardrails:** 
    *   *WHEN* I use the website, 
    *   *THEN* my data is protected with strong security measures including HTTPS, secure login mechanisms, and regular security audits.
*   *Developer Note (Support Parallel):* Setting up the initial OAuth workflow establishes secure user authentication and token exchange. The subsequent engineering milestone involves bridging authentication to persistence—specifically building server-side database endpoints and schema architecture to map authenticated unique session IDs to persistent user data-tracking states.

### 🔍 2. Search, Filtering, & Data Consumption
*   **Legislation Search:** 
    *   *WHEN* I use the search bar for keywords, 
    *   *THEN* legislation matching my keywords appears on a search results screen.
*   **Filtering and Sorting:** 
    *   *WHEN* I view legislation or elected officials, 
    *   *THEN* I can filter and sort them by various criteria such as date, topic, committee, policy area, chamber, sponsor/cosponsor, status, and congressional session (e.g., 118th Congress).
*   **District Search:** 
    *   *WHEN* I search for my district using my address, 
    *   *THEN* I can see the relevant district information.

### 👥 3. Public Official Tracking & Voting Records
*   **Elected Officials Information:** 
    *   *WHEN* I am able to see all current elected officials serving in the offices of President, Vice President, Congress, and SCOTUS, 
    *   *THEN* I am able to save these officials to my profile so that I can easily track their votes and bill introductions.
*   **Voting Records:** 
    *   *WHEN* I view an official’s profile, 
    *   *THEN* I can see their voting records.

### 📰 4. Content Delivery & Interface Navigation
*   **Homepage News Articles:** 
    *   *WHEN* I visit/click on the homepage, 
    *   *THEN* there will be boxes/cards inside each containing a current news article related to news on the federal level.
*   **Hamburger Menu Navigation:** 
    *   *WHEN* I click on the hamburger menu on the top left of the page, 
    *   *THEN* I am able to see a menu with options to go to pages for House of Representatives Members, Senators, Office of the President, Office of the Vice President, SCOTUS, Current Legislation, Previous Legislation, and Congressional News.

### 📊 5. Advanced UI Components & Pipelines
*   **Data Visualization:** 
    *   *WHEN* I view legislative data, 
    *   *THEN* I can see visual summaries such as pie charts or bar graphs.
*   **Interactive Maps:** 
    *   *WHEN* I view the district information, 
    *   *THEN* I can see an interactive map showing the districts of the elected officials.
*   **Notification Pipelines:** 
    *   *WHEN* I track legislation or saved officials, 
    *   *THEN* I can opt to receive email or SMS notifications for updates.
*   **Historical Data:** 
    *   *WHEN* I visit the historical data section, 
    *   *THEN* I can access past legislation and elected officials’ information.

### 🌐 6. Accessibility & Learning Resources
*   **Educational Resources:** 
    *   *WHEN* I visit the educational resources section, 
    *   *THEN* I can access explanations of how legislation is made and the roles of different government branches, along with FAQs and a glossary.
*   **Accessibility Options:** 
    *   *WHEN* I need accessibility options, 
    *   *THEN* I can choose larger text, high contrast, and screen reader compatibility settings.
*   **Mobile Compatibility:** 
    *   *WHEN* I access the website on a mobile device, 
    *   *THEN* the site is fully responsive and functions well.

### 🤖 7. Intelligent Assistance
*   **AI Chatbot System:** 
    *   *WHEN* I visit the website, 
    *   *THEN* I can interact with an AI chatbot that can answer questions about legislation, elected officials, and general information about the federal government.
    *   *WHEN* I ask the AI chatbot a question, 
    *   *THEN* it provides accurate and relevant information or directs me to the appropriate section of the website.

---

## 🔧 Current Development Setup

To explore the current active file structure and basic layout locally:

1. **Clone the project repository:**
```bash
   git clone [https://github.com/lelisiario/PolicyExplained.git](https://github.com/lelisiario/PolicyExplained.git)
