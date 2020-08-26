const koa = require('koa');
const router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-bodyparser');
const apiRouter = require('./router/router');
const views = require("koa-views");   //匯入view
const mysql = require('mysql');
const db = require("./database");

const app = new koa();

//orm,mvc架構
// 配置模板路径及所使用的模板引擎
app.use(
  views(__dirname + "/view", {
    map: {
      html: "nunjucks"
    }
  })
);


db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error =>
    console.log('Unable to connect to the database:', error))


// request -> node.js tcp socket(http) -> koa middlewares
app.use(logger());
app.use(koaBody());
app.use(apiRouter.routes());
app.use(async ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body;
});
// Open a server instance
app.listen(3000);