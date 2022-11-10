import {
    BadRequestException,
    Injectable,
    Logger,
    PipeTransform,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
    private readonly logger: Logger = new Logger(ParseObjectIdPipe.name);
    transform(object: object) {
        this.logger.debug('TRANSFORM::INIT');
        const objectId = Object.values(object).pop();

        if (!Types.ObjectId.isValid(objectId)) {
            throw new BadRequestException('Invalid ObjectId');
        }
        this.logger.debug('TRANSFORM::FINISH');
        return Types.ObjectId.createFromHexString(objectId);
    }
}
