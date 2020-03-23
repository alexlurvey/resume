import * as Koa from 'koa';
import * as Router from '@koa/router';
import { readFileSync } from 'fs';

const app = new Koa()
const router = Router()

router.get('/', (ctx, next) => {
  ctx.body = 'There\'s nothing here';
})

router.get('/resume', (ctx, next) => {
  const pdf = readFileSync('resume.pdf')
  ctx.set('Content-Type', 'application/pdf')
  ctx.body = pdf;
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
