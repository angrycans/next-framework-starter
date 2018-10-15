import Router from 'koa-router';
import LRUCache from 'lru-cache'



const router = new Router();


//console.log(router);

(router as any).nextRoute = (handle) => {
  router.get(/^(?!\/api)/, async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
};

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

(ssrCache as any).reset();

(router as any).ssrCache = (nextApp) => {

  /*
   * NB: make sure to modify this to take into account anything that should trigger
   * an immediate page change (e.g a locale stored in req.session)
   */
  function getCacheKey(ctx) { return ctx.url }

  function renderAndCache(ctx, pagePath, queryParams?: object) {
    const key = getCacheKey(ctx.req)

    console.log("server", pagePath);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
      console.log(`CACHE HIT: ${key}`)
      ctx.body = ssrCache.get(key)
      return Promise.resolve()
    }

    // If not let's render the page into HTML
    return nextApp.renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
      .then((html) => {
        // Let's cache this page
        console.log(`CACHE MISS: ${key}`)
        ssrCache.set(key, html)
        ctx.body = html
      })
      .catch((err) => {
        console.log('ERRR', err)
        return nextApp.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
      })
  }

  router.get('/', (ctx) => renderAndCache(ctx, '/'))

  router.get('/p/:id', async (ctx, next) => {
    const actualPage = '/post'
    const queryParams = {
      title: ctx.params.id
    }
    await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    ctx.response = false
  })

  // preventing /blog from displaying
  // see https://github.com/zeit/next.js/issues/2682
  //router.get('/blog/:id', (ctx, id) => renderAndCache(ctx, '/blog2', { id }))
};


export default router
