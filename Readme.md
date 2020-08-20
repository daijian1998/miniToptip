## TopTip

一个轻量级的TopTip提示框，小程序自带的Toast有时候不太适合做一些轻量级的提示，也去寻找了一些相关插件都不太符合心意，主流的一些插件库感觉好像也不太适合，所以干脆自己再造一个轮子

## 效果图

![image-20200820100338458](C:\Users\DJJD\AppData\Roaming\Typora\typora-user-images\image-20200820100338458.png)

![image-20200820100400482](C:\Users\DJJD\AppData\Roaming\Typora\typora-user-images\image-20200820100400482.png)

## 使用方法

​	下载代码到自己的组件目录，引用该组件，我这里使用的比较多，就直接在app.json里面全局引用了

```js
  "usingComponents":{
    "mytip":"ColorUI/components/msg"
  },
```

​	在相关页面的wxml文件中使用该组件,id是必须要的！！！

```html
<mytip id="toptip" ></mytip>
```

​	最后在页面的js文件中获取到该组件的实例化对象调用方法就好了

​			获取对象实例

​			

```js
  onReady: function () {
      this.toptip=this.selectComponent('#toptip')
  },
```

​		调用显示方法

​		

```js
  test(){
    this.toptip.showTip("请完整输入密码",'error')
  },
```

##### 	showtip参数说明

​	

| 参数 |  类型  |            描述            |
| :--: | :----: | :------------------------: |
| tip  | String |     toptip要展示的文字     |
| type | String | 提示类型 info\|warn\|error |

提示时间默认2s,我并没有将其作为一个参数，我觉得将时间作为一个参数有点荒谬。。。。