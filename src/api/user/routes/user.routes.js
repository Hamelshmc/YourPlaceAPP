const { auth, verified } = require('../middleware');
const { cacheTime } = require('../../../helpers');
const cache = require('../../../middleware/cache.middleware');
const userController = require('../controllers');
const userRouter = require('express').Router();

userRouter
  .route('/register')
  .post(async (request, response) => await userController.registerUser(request, response));

userRouter
  .route('/login')
  .post(async (request, response) => await userController.loginUser(request, response));

userRouter
  .route('/verify/:id/:secretCode')
  .get(async (request, response) => await userController.verifyUser(request, response));

userRouter
  .route('/')
  .all(auth, verified)
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
