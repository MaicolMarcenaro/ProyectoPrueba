import { Router } from 'express';
import passport from 'passport';

import UsersController from '../../controllers/user.controller.js';
// import { log } from 'winston';

const router = Router();

router.get('/user', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  try {
    const users = await UsersController.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/user/:uid', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    const user = await UsersController.getById(uid);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/user',  async (req, res, next) => {
    try {
      const { body } = req;
      const user = await UsersController.create(body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  });
  
  router.put('/user/:uid', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
      const { params: { uid }, body } = req;
      await UsersController.updateById(uid, body);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

  router.delete('/user/:pid',  async (req,res)=>{
    const {pid} = req.params;
    try {
        await UsersController.deleteById(pid)
     res.status(204).end();
    } catch (error) {
        res.status(500).json('error' , error)
    }
})
  
  
  export default router;