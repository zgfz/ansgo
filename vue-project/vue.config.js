//cli4 的项目配置文件

module.exports = {
  
    devServer:{
      //设置代理
      proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
        '/api': { //axios访问 /api ==  target + /api
          target: 'http://localhost:3001',
          changeOrigin: true, //创建虚拟服务器 
          ws: true, //websocket代理
        },
        
        // 远端
        '.netapi':{
          target:'https://zhong520.top',
          changeOrigin:true,
          ws:true,
        },

        // 第三方
        '/douban': { // axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&count=10'
          target: 'https://douban.uieee.com',
          changeOrigin: true,
          pathRewrite: { //路径替换
            '^/douban': '', // axios 访问/douban/v2 == target + /v2
          }
        }
      }
    }
  }
  