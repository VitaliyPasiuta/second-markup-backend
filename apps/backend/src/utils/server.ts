import * as express from "express";
import routers from "../app/router/routers";
import { Express } from "express";
import { nextTick } from "process";

export const createServer = async (): Promise<Express> => {
  const app = express();
  
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to backend!' });
  });
  
  app.use('/api', routers);
  
  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
  return app;
}