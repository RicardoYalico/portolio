// Cliente mock - no hace nada
const client = {
  sendEmail: (emailData) => {
    console.log('Email disabled, would have sent:', emailData);
    return Promise.resolve({ 
      Message: 'Email disabled',
      ErrorCode: 0,
      MessageID: 'mock-id'
    });
  },
  sendEmailWithTemplate: (emailData) => {
    console.log('Template email disabled, would have sent:', emailData);
    return Promise.resolve({ 
      Message: 'Email disabled',
      ErrorCode: 0,
      MessageID: 'mock-id'
    });
  },
};

export default client;