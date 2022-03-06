const Service = require('egg').Service;

class MemberService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = '';
  }

  async index() {
    return [{
      'id': 1,
      'name': '小红',
      'salary': 1000
    },
    {
      'id': 2,
      'name': '小蓝',
      'salary': 2000
    }];
  }
}

module.exports = MemberService;