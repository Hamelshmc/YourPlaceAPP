const userRouter = require('express').Router();
const { auth, verified, handleToken } = require('../middleware');
const userController = require('../controllers');

userRouter
  .route('/checkToken')
  .get(async (request, response) => await userController.checkToken(request, response));

userRouter
  .route('/generateTokens')
  .get(async (request, response) => await userController.generateTokens(request, response));

userRouter
  .route('/register')
  .post(async (request, response) => await userController.registerUser(request, response));

userRouter
  .route('/login')
  .post(async (request, response) => await userController.loginUser(request, response));

userRouter
  .route('/verify/:id/:code')
  .get(async (request, response) => await userController.verifyUser(request, response));

userRouter
  .route('/')
  .all(auth)
  .get(async (request, response) => await userController.getMeUser(request, response))
  .put(async (request, response) => await userController.putUser(request, response));

userRouter
  .route('/:id')
  .get(async (request, response) => await userController.getUser(request, response));

userRouter
  .route('/ratings')
  .all(auth, verified)
  .post(async (request, response) => await userController.postRating(request, response))
  .put(async (request, response) => await userController.putRating(request, response));
module.exports = userRouter;
