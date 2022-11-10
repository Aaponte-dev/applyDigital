// External dependencies
import {
    Injectable,
    CanActivate,
    ExecutionContext,
    Inject,
    UnauthorizedException,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigType } from '@nestjs/config';

// Internal dependencies
import config from '../config/environmentVariables';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    private readonly logger: Logger = new Logger(ApiKeyGuard.name);
    constructor(
        @Inject(config.KEY) private configService: ConfigType<typeof config>,
    ) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        this.logger.log('CAN_ACTIVE: INIT');
        const request = context.switchToHttp().getRequest();
        let apiKey: string = request.headers['apikey'];
        apiKey = apiKey ? apiKey.replace('Bearer ', '') : apiKey;
        if (this.configService.projectApiKey !== apiKey) {
            throw new UnauthorizedException();
        }
        this.logger.log('CAN_ACTIVE: FINISH');
        return true;
    }
}
