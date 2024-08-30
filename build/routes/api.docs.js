"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsDocs = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Sistema de ventas API",
            description: "Documentacion API",
            contact: {
                name: "Angel Gerardo Velazquez",
                url: "https://github.com"
            },
            serves: [{
                    url: "http://localhost:3000",
                    description: "Developer server"
                }]
        }
    },
    basePath: "/",
    apis: ["./src/routes/*.ts"]
};
const swaggerDocs = swaggerJsDocs(options);
exports.default = swaggerDocs;
