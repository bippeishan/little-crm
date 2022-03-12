const Service = require('egg').Service;

class MemberService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = '';
  }

  async index() {
    const result = await this.app.mysql.select('member', {
      where: { status: 1 },
      orders: [['create_time','desc']],
      limit: 20,
      offset: 0
    })
    return result;
  }

  async create(args) {
    const result = await this.app.mysql.insert('member', {
      name: args.name,
      base_salary: args.base_salary,
      competi_subsidy: args.competi_subsidy,
      senior_subsidy: args.senior_subsidy,
      quarter_bonus_base: args.quarter_bonus_base,
      year_bonus_base: args.year_bonus_base,
      status: 1,
    })
    console.log('create-result:', result)
    return {
      success: result.affectedRows === 1
    };
  }
}

module.exports = MemberService;