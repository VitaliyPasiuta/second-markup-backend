import * as express from "express";
import routers from "../app/router/routers";
import { Express } from "express";
import * as cors from 'cors';
import { Server } from "http";

export const createServer = async (isTest = false): Promise<{app: Express, server: Server}> => {
  const app = express();
  app.use(cors())
  
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to backend!' });
  });
  
  app.use('/api', routers);

  let PortBoofer;
  if(isTest){
    PortBoofer = 8080;
  }
  else{
    PortBoofer = 3333;
  }
  const port = process.env.port || PortBoofer;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
  return {app, server};
}