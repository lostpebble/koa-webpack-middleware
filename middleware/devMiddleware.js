import devMiddleware from 'webpack-dev-middleware'

function promiseExpressMiddleware(compiler, opts) {
  const expressMiddleware = devMiddleware(compiler, opts);

  return (ctx) => {
    return new Promise((resolve, reject) => {
      expressMiddleware(ctx.req, {
        end: (content) => {
          ctx.body = content
        },
        setHeader: ctx.set.bind(ctx)
      }, resolve);
    });
  }
}

export default (compiler, opts) => {
  const middleware = promiseExpressMiddleware(compiler, opts);

  return async (ctx, next) => { // eslint-disable-line
    await middleware(ctx);
    next();
  }
}


/*
* await middleware(ctx.req, {
 end: (content) => {
 ctx.body = content
 },
 setHeader: ctx.set.bind(ctx)
 }, next)
* */