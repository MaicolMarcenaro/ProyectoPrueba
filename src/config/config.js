import dotenv from 'dotenv';
import {Command} from 'commander';

const program = new Command();

program
  .option('--mode <mode>', 'mode environment', 'dev');

program.parse();

let pathEnvFile = null;
if (program.opts().mode !== 'production') {
  pathEnvFile = './.env.dev';
} else {
  pathEnvFile = './.env.prod';
}
dotenv.config({ path: pathEnvFile });

export default {
  port: process.env.PORT,
  env: process.env.ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  cookeSecret: process.env.COOKE_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  persistence: process.env.PERSISTENCE || 'MongoDB',
  mail: {
    service: process.env.EMAIL_SERVICE || "gmail",
    port: process.env.EMAIL_PORT || 587,
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
  }
}