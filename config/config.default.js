// exports.view = {
//     defaultViewEngine: 'egg-view-react',
//     mapping: {
//         '.js': 'react',
//         '.jsx': 'react',
//       },
//   };

exports.keys = 'asdf3.14bips%.'

// exports.config.security = {
//     csrf: {
//       enable: false,
//       ignoreJSON: true
//     },
//     domainWhiteList: ['*']//[]中放放出的白名单，*代表所有
//   };

  exports.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '3yI[mPhJKd<',
      // 数据库名
      database: 'littlecrm',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };