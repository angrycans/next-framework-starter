import Koa from 'koa';
import next from 'next';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
const mobxReact = require('mobx-react')


mobxReact.useStaticRendering(true)
// import requestId from './middleware/requestId';
import requestId from 'koa-requestid';
import responseHandler from './middleware/responseHandler';
import router from './routes';
import conf from '../next.config.js';

const env: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const dev: boolean = process.env.NODE_ENV !== 'production';

const nextApp = next({
    dev,
    conf,
    dir: './src'
});

const handle = nextApp.getRequestHandler();
(router as any).ssrCache(nextApp);
(router as any).nextRoute(handle);
const app = new Koa();

!dev ? app.use(logger()) : '';
app.use(bodyParser());
app.use(requestId());
app.use(helmet());
app.use(cors({
    exposeHeaders: ['X-Request-Id']
}));
app.use(responseHandler());

if (!module.parent) {
    nextApp.prepare()
        .then(() => {
            app.use(router.routes());
            app.use(router.allowedMethods());
            app.listen(3000, '0.0.0.0', () => {
                console.info(`API server listening on localhost:3000, in ${env}`);
            });
        });
} else {
    // test
    app.use(router.routes());
    app.use(router.allowedMethods());
}
app.on('error', err => console.error(`Unhandled exception occured. message: ${err.message}`));

export default app;
