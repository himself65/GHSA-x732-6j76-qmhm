import express from "express";
import { betterAuth } from "better-auth/minimal";
import { toNodeHandler } from "better-auth/node";

const app = express();
const port = process.env.PORT || 3000;

const auth = betterAuth();

app.all("/api/auth/*", toNodeHandler(auth));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
