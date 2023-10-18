import { AppService } from './app.service';
import { RmqContext } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    handleCreateEvent(payload: any, context: RmqContext): Promise<void>;
    private toDb;
}
