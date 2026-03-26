const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.OPENAI_API_KEY;

app.post("/chat", async (req, res) => {
try {
const userMessage = req.body.message;

```
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: userMessage }]
  })
});

const data = await response.json();
res.json({ reply: data.choices[0].message.content });
```

} catch (error) {
res.json({ reply: "Error 😢" });
}
});

app.listen(3000, () => {
console.log("Server running");
});
