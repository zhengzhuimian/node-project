// 测试控制器
module.exports = (req, res) => {
    let params = req.body;
    console.log(params)
    res.send('注册成功')

}