module.exports = {
   publicPath: process.env.NODE_ENV === 'production' ?
      "./"
      : "/",
   // 暂时关闭tsLint
   lintOnSave: false, 
   // 关闭map文件
   productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,

}
