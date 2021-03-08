const userRepository = require('../../../repositories/user.repository');

async function validateVerification(code) {
  const now = new Date();
  const validated = await userRepository.validateVerificationCode(now, code);

  return validated;
}

module.exports = validateVerification;
