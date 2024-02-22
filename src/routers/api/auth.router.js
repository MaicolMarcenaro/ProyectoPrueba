import { Router } from 'express';
import AuthController from '../../controllers/auth.controller.js';
import userModel from '../../models/user.model.js';
import { createHash, isValidPassword, tokenGenerator } from '../../utils/utils.js';

const router = Router();

router.post('/auth/register', async (req, res) => {
  const {
    body: { first_name, last_name, email, password, age },
  } = req;
  if (!first_name || !last_name || !email || !password || !age) {
    req.logger.error('All fields are required to successfully register the user')
    return res.status(400).send({ message: 'All fields are required' });
  }
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).send({ message: 'Already registered user' });
  }
  user = await userModel.create({
    first_name,
    last_name,
    email,
    age,
    password: createHash(password),
  });
  res.status(201).send({ message: 'Successfully registered user' });
});

router.post('/auth/login', async (req, res) => {
  const {
    body: { email, password },
  } = req;
  if (!email || !password) {
    req.logger.error('Wrong email or password');
    return res.status(401).send({ message: 'Wrong email or password' });
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).send({ message: 'Unregistered user' });
  }
  const validPass = isValidPassword(password, user);
  if (!validPass) {
    req.logger.error('Wrong email or password');
    return res.status(401).send({ message: 'Wrong email or password' });
  }
  const token = tokenGenerator(user);
  res
    .cookie('access_token', token, {
      maxAge: 600000,
      httpOnly: true
    })
    .status(200)
    .json({ status: 'success' });
});

export default router;