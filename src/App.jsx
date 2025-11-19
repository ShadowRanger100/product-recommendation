import axios from "axios";
import { useState } from "react";
import { products } from "./products";

function App() {
  const [input, setInput] = useState("");
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecommendations = async () => {
    setLoading(true);
    setResponseText("");

    const systemPrompt = `
You are the recommendation engine.

Use ONLY the products from products.json.

When I give a preference, respond with a list of matching product names ONLY.
No sentences.
No explanations.
No descriptions.
No extra words.
No punctuation except commas for separating names.
No internet use.

Output format example:
{Product name} : Price, 
{Product name} : Price, 
{Product name} : Price

If you output anything other than the exact required format, your entire response is invalid.


Product list:
${JSON.stringify(products)}
`;

    try {
      const response = await axios.post("http://localhost:1234/v1/chat/completions", {
        model: "gemma-2-2b-it",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: input }
        ],
        temperature: 0.2
      });

      const text = response.data.choices[0].message.content;
      setResponseText(text);
    } catch (error) {
      console.error(error);
      setResponseText("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px" }}>
      <h1>AI Product Recommendation</h1>

      <input
        type="text"
        placeholder="Describe what you want..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "300px", padding: "8px", marginRight: "10px" }}
      />

      <button onClick={getRecommendations} style={{ padding: "8px 12px" }}>
        Recommend
      </button>

      {loading && <p>Thinking...</p>}

      {responseText && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          <h3>AI Recommendation:</h3>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
