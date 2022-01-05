import Router from "@koa/router";
const router = new Router();

//获取文件数据
router.get("/file", async (ctx) => {
  ctx.body = {
    success: true,
    msg: "fetch success",
    code: 200,
  };
});

router.prefix("/api");
export default router;
