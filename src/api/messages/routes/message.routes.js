const messageRouter = require('express').Router();
const messageController = require('../controller');
const { auth, verified } = require('../../user/middleware/');

messageRouter
  .route('/')
  .all(auth, verified)
  .post(async (request, response) => await messageController.newMessage(request, response))
  .get(async (request, response) => await messageController.getMyTalks(request, response));

messageRouter
  .route('/:id')
  .all(auth, verified)
  .get(async (request, response) => await messageController.getOurTalk(request, response));

module.exports = messageRouter;
