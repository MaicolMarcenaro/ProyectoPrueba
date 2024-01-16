import http from 'http';
import {Command} from 'commander'

import config from './config/config.js';
import app from './app.js';
import { init as initMongoDB } from './db/mongodb.js';
import { log } from 'console';

const program = new Command();

program
  .option('-p <port>' , 8080)
  .option('--mode <mode>', 'development' )

program.parse();
program.opts();


await initMongoDB();

const server = http.createServer(app);
const PORT = program.opts().p;
const ENV = program.opts().mode;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} `);
});