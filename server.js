// Import dependencies
import express from "express";
import cors from "cors";
import OpenAI from "openai";

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI client with your API key from Render environment variables
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Route for testing server
app.get("/", (req, res) => {
  res.send("✅ ToolXeno AI backend is running!");
});

// Main chat route
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Validate message
    if (!userMessage) {
      return res.status(400).json({ error: "No message provided" });
    }

    // Ask GPT model
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are ToolXeno AI Assistant. Answer questions about Tool Xeno tools clearly and helpfully.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    // Send GPT's reply
    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Use Render's PORT or default 5000 for local
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
