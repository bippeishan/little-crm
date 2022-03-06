const Controller = require('egg').Controller;

class MemberController extends Controller {
  async index() {
    const ctx = this.ctx;
    // 调用 service 创建一个 topic
    const members = await ctx.service.member.index(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      members: members,
    };
    ctx.status = 200;
  }
}
module.exports = MemberController;