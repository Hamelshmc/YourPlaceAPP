module.exports = {
  getMeUser: require('./get.me.user.controller'),
  getUser: require('./get.user.controller'),
  loginUser: require('./login.user.controller'),
  postRating: require('./insert.rating.user.controller'),
  putRating: require('./put.rating.user.controller'),
  putUser: require('./put.user.controller'),
  registerUser: require('./register.user.controller'),
  verifyUser: require('./verify.user.controller'),
  generateTokens: require('./generate.tokens.controller'),
  checkToken: require('./check.token.controller'),
};
