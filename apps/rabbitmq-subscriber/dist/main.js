"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                process.env.RABBITMQ_URL,
            ],
            queue: 'Movies',
            noAck: false,
            prefetchCount: 1,
            queueOptions: {
                durable: false,
            },
        },
    });
    await app.listen();
    console.log('Microservice listening on port: ', 5672);
}
bootstrap();
//# sourceMappingURL=main.js.map