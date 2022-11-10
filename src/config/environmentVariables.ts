// External dependencies
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    const loggerLevel =
        'debug' === process.env.LOGGER_LEVEL ? 'debug' : 'error';

    return {
        projectName: process.env.PROJECT_NAME,
        projectPort: parseInt(process.env.PORT, 10),
        projectApiKey: process.env.API_KEY,
        mongoDb: {
            host: process.env.MONGO_HOST,
            port: parseInt(process.env.MONGO_PORT, 10),
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
            loggerLevel: loggerLevel,
            showMongoLogs: JSON.parse(process.env.SHOW_MONGO_LOGS),
        },
    };
});
