const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
      title: 'My API',
      description: 'Description'
    },
    host: 'localhost:3000'
  };

const outputFile = './swagger_doc'
const routes = ['./index.ts'];

swaggerAutogen(outputFile, routes, doc);