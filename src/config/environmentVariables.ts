// External dependencies
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        projectName: process.env.PROJECT_NAME,
        projectPort: parseInt(process.env.PORT, 10),
    };
});
