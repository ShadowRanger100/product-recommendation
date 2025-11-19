# **AI-Powered Product Recommendation System**

This project is a lightweight React application that showcases how to integrate an AI model into a frontend for product recommendations. The user can enter a simple preference such as *“phone under $400”* and the system returns relevant products only from the local dataset.
The goal is to demonstrate React fundamentals, API integration, and controlled AI responses.

---

## **Features**

* React frontend built with Vite
* Product list displayed from a local JSON file
* Simple input box for user queries
* AI-powered recommendations using a local API (LM Studio or any OpenAI-compatible server)
* Responses strictly limited to product names from the dataset
* Clean and minimal UI

---

## **Project Structure**

```
src/
  components/
    ProductList.jsx
    RecommendationBox.jsx
  data/
    products.json
  App.jsx
  main.jsx
```

---

## **How It Works**

1. The user enters a query (for example: *“laptop under $600”*).
2. The frontend sends:

   * the user query
   * the product list
   * a strict prompt
     to the AI API endpoint.
3. The AI returns only the product names that match the query.
4. The recommendations are displayed instantly on the screen.

---

## **Getting Started**

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Configure your AI model

In `App.jsx`, set your local model endpoint and name:

```js
const API_URL = "http://localhost:1234/v1/chat/completions";
const MODEL_NAME = "phi3-mini-4k-instruct";
```

Update these if you are using a different model or port.

---

## **Prompt Used for Recommendations**

This prompt ensures the AI sticks to your dataset and returns only names:

```
You are an AI assistant for a product recommendation system.
Use ONLY the products provided in the list.
Return only the product names, nothing else.
Do not add explanations, descriptions, or extra text.
User query: "<USER_INPUT>"
```

---

## **Build for Production**

```bash
npm run build
```

---

## **Tech Stack**

* React
* Vite
* Axios
* Local AI Model (Phi-3, Mistral, etc.)

---
