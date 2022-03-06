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