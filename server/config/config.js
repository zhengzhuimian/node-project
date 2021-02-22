// 配置层

// 根据node运行环境执行相应的配置文件(开发配置文件,生产配置文件)

// 加载配置文件
// 获取node运行环境,执行 NODE_ENV=dev nodemon index.js
let env = process.env.NODE_ENV;

// 根据node运行环境加载配置文件
module.exports = require(path.resolve(__basename, `config/config.${env}.js`))