// var postmark = require('postmark');
// var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_CLIENT);

// Cliente mock - no hace nada
const client = {
  sendEmail: () => Promise.resolve({ Message: 'Email disabled' }),
  sendEmailWithTemplate: () => Promise.resolve({ Message: 'Email disabled' }),
  // Agrega otros métodos que uses si es necesario
};

export default client;