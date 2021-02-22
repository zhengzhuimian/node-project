// 路由层
// 导入控制器层
const controller = require(path.resolve(__basename, 'controller/controder.js'))
module.exports = app => {
    app.post('/rgister', controller.rgister)
}