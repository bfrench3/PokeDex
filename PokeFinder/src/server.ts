import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import mysql from 'mysql2/promise';
import cors from 'cors';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const bcrypt = require('bcrypt');
const saltRounds = 3;

const app = express();
app.use(cors());
app.use(express.json());
const angularApp = new AngularNodeAppEngine();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ripfly2000!',
  database: 'usersPoke',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {

    const query = "SELECT * FROM users WHERE USERNAME = ? AND PASSWORD = ?";
    const [result] = await pool.execute(query, [username, password]);
    console.log("api: ", [result]);
    if ([result].length > 0) {
      res.json(result);
    } else {
      res.status(500).json({ error: "error" });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/note', async (req, res) => {
  const { title, note, user } = req.body;
  try {
    console.log("req: ", title, note);
    const query = "INSERT INTO notes (title, note, user) VALUES (?, ?, ?)";
    const [result] = await [pool.execute(query, [title, note, user])];
    console.log([result]);
    res.json(result);
  } catch (error: any) {
    console.error(error);
  }
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: "invalid input" });
  }
  try {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const [result] = await pool.execute(query, [username, password]);
    res.json(result);

  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/showNote', async (req, res) => {
  const { user } = req.body;
  console.log("user from front end", user);
  try {
    const query = "SELECT * FROM notes WHERE user = ?";
    const [result] = await pool.execute(query, [user]);
    res.json(result);
  } catch (error: any) {
    console.error(error);
  }
}
);

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}



/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
