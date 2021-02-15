const notificationRouter = require('express').Router();
const notificationController = require('../controller');
const { auth, verified } = require('../../user/middleware/');

notificationRouter
  .route('/')
  .all(auth, verified)
  .get(
    async (request, response) => await notificationController.showAllNotification(request, response)
  );

notificationRouter
  .route('/:id')
  .all(auth, verified)
  .delete(
    async (request, response) => await notificationController.deleteNotification(request, response)
  );

module.exports = notificationRouter;
