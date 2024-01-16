
import dotenv from 'dotenv'

let pathEnvFile = null

if (process.env.ENV === 'production') {
  pathEnvFile= './.env/prod'
}else{
  pathEnvFile= './.env/dev'
}

dotenv.config({path: pathEnvFile})



export default {
    port: process.env.PORT || 8080,
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/marketplace',
  };

