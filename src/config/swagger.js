const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'NoSQL-TP API',
            version: "1.0.0",
            description: 'Api with Users, Animals and Video Games collections for TP in NoSQL for school',
            contact: {
                name: 'Marie Briand'
            },
            servers: ['http://localhost:3000']
        }
    },
    basePath: "/api/",
    apis: ["../src/controllers/**/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
