// public/transformer-worker.js
import { pipeline } from "@xenova/transformers";

// Cache model
let generator = null;

self.onmessage = async (event) => {
  const input = event.data;

  try {
    if (!generator) {
      generator = await pipeline("text-generation", "Xenova/distilgpt2");
    }
    const output = await generator(input, { max_length: 60, do_sample: true });
    self.postMessage(output[0].generated_text);
  } catch (err) {
    console.error("Worker error:", err);
    self.postMessage("⚠️ AI not available right now.");
  }
};
