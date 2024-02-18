import express from 'express';
import path from 'path';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import ErrorHanddler from './middlewares/ErrorHanddler.js';
// import { addLogger } from './config/logger.js';

import { __dirname, Exception } from './utils/utils.js';
import {init as initPassport} from './config/passport.config.js'

import UserRouter from './routers/api/user.router.js'
import ProductsRouter from './routers/api/products.router.js'
import LoginRouter from './routers/api/auth.router.js'

//importar routers

const app = express()

initPassport()
app.use(passport.initialize())

const corsOptions = {
    origin: 'http://localhost:5500',
    methods: ['GET','POST','PUT'],
  };

// app.use(addLogger)
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));




// app.use('/', );
app.use('/api',LoginRouter, UserRouter, ProductsRouter);


app.get('/', (req, res)=>{
    res.send('Inicio de app')
});

app.use(ErrorHanddler)
// app.use((error, req, res, next) => {
//     if (error instanceof Exception) {
//       res.status(error.status).json({ status: 'error', message: error.message });
//     } else {
//       const message = `Ah ocurrido un error desconocido : ${error.message}`;
//       console.log(message);
//       res.status(500).json({ status: 'error', message });
//     }
//   });

export default app;