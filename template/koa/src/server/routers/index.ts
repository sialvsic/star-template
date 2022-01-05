import Koa from "koa";
import Router from "@koa/router";
import FileRouter from "./file";

const router = new Router();
router.prefix("/api");

export default function (app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
  app.use(FileRouter.routes()); //文件相关的路由
  app.use(router.allowedMethods());
}
