import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

function serveStatic(app: express.Express) {
  const distPath = path.join(__dirname, "dist/public"); // Adjust if your build output folder differs
  app.use(express.static(distPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Example: your registerRoutes and setupVite functions here, or import them
async function registerRoutes(app: express.Express) {
  // Register your API routes here
  // e.g. app.use('/api', apiRouter)
  return app;
}

async function setupVite(app: express.Express, server: any) {
  // Setup Vite dev server integration here
}

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();
