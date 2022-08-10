import {createServer} from './utils/server';


async function startServer(){
  await (await createServer()).app;
};
startServer();
