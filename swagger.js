const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Games API',
        description: 'This API provides data from video games.'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc) 