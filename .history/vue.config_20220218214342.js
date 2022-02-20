module.exports={
    productionSourceMap
    //关闭eslint
    lintOnSave:false,
    devServer: {
        proxy: {
          '/api': {
            target: 'http://39.98.123.211',
            // pathRewrite: { '^/api': '' },不用重写地址
          },
        },
      },
}