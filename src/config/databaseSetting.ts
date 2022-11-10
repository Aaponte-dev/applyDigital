// External dependencies
import 'dotenv/config';
import { Logger } from '@nestjs/common';

// Internal dependencies
import config from './environmentVariables';

const configEnvs = config();

function buildOptionsByMongoose() {
    Logger.log('INIT', 'BUILD_OPTIONS_BY_MONGOOSE');
    const response = `mongodb://${configEnvs.mongoDb.user}:${configEnvs.mongoDb.password}@${configEnvs.mongoDb.host}:${configEnvs.mongoDb.port}/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
    Logger.log('FINISH', 'BUILD_OPTIONS_BY_MONGOOSE');
    return response;
}

export default { buildOptionsByMongoose };
