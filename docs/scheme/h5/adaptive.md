# 移动端适配

[文章内容原文](https://juejin.cn/post/7085931616136069156#heading-18)

## 前置知识

### 屏幕尺寸

> 屏幕尺寸指的是以屏幕对角线的长度来计算的，单位是英寸  1英寸 = 2.54厘米

### 像素pixel

> 像素是硬件和软件所能控制的最小单位，它指显示屏的画面上表示出来的最小单位，一幅图像通常包含成千上万个像素，每个像素都有自己的颜色信息，它们紧密地组合在一起。一个像素，就是一个点，或者说是一个很小的正方形

#### 屏幕分辨率

> 屏幕分辨率指一个屏幕具体由多少个像素点组成，单位是px。

#### 物理像素（设备像素）

> 在同一个设备上，他的物理像素是固定的，也就是厂家在生产显示设备时就决定的实际点的个数，对于不同设备物理像素点的大小是不一样的

#### 逻辑像素（设备独立像素）

> 把4个像素当1个像素使用，这样让屏幕看起来更精致，并且在不同屏幕中，相同的逻辑像素呈现的尺寸是一致的。所以高分辨率的设备，多了一个逻辑像素。我们从第一张图中可以看到不同设备的逻辑像素仍然是有差异的，只不过差异没有物理像素那么大，于是便诞生了移动端页面需要适配这个问题。

#### 每英寸像素点ppi

> ppi（pixel per inch) 表示每英寸所包含的像素点数目，数值越高，说明屏幕能以更高密度显示图像

#### 设备像素比dpr

> dpr（device pixel ratio） 表示设备像素比，设备像素/设备独立像素，代表设备独立像素到设备像素的转换关系，在JS中可以通过 window.devicePixelRatio 获取

### 视口viewport

> viewport指的是视口，他是浏览器或app中webview显示页面的区域。一般来讲PC端的视口指的是浏览器窗口区域，而移动端就有点复杂，它有三个视口

#### 布局视口（layout viewport）

> 它是由浏览器提出的一种虚拟的布局视口，用来解决页面在手机上显示的问题

#### 视觉视口（visual viewport）

> 它指的是浏览器的可视区域，也就是我们在移动端设备上能够看到的区域。

#### 理想视口（ideal viewport）

目的是解决在布局视口下页面元素过小的问题，显示在理想视口中的页面具有最理想的宽度，用户无需进行缩放。所谓理想视口，即页面绘制区域可以完美适配设备宽度的视口大小，不需要出现滚动条即可正常查看网站的所有内容，且文字图片清晰，如所有iphone的理想视口宽度都为320px，安卓设备的理想视口有320px、360px等等。

## meta viewport

对于移动端页面，可以采用`<meta`>标签来配置视口大小和缩放等。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

- `width`: 该属性被用来控制视窗的宽度，可以将width设置为320这样确切的像素数，也可以设为device-width这样的关键字，表示设备的实际宽度，一般为了自适应布局，普遍的做法是将width设置为device-width
- `height`: 该属性被用来控制视窗的高度，可以将height设置为640这样确切的像素数，也可以设为device-height这样的关键字，表示设备的实际高度，一般不会设置视窗的高度，这样内容超出的话采用滚动方式浏览。
- `initial-scale`: 该属性用于指定页面的初始缩放比例，可以配置0.0～10的数字，initial-scale=1表示不进行缩放，视窗刚好等于理想视窗，当大于1时表示将视窗进行放大，小于1时表示缩小。这里只表示初始视窗缩放值，用户也可以自己进行缩放，例如双指拖动手势缩放或者双击手势放大。安卓设备上的initial-scale默认值： 无默认值，一定要设置，这个属性才会起作用。在iphone和ipad上，无论你给viewport设的宽的是多少，如果没有指定默认的缩放值，则iphone和ipad会自动计算这个缩放值，以达到当前页面不会出现横向滚动条(或者说viewport的宽度就是屏幕的宽度)的目的。
- `maximum-scale`：该属性表示用户能够手动放大的最大比例，可以配置0.0～10的数字
- `minimum-scale`：该属性类似maximum-scale，用来指定页面缩小的最小比例。通常情况下，不会定义该属性的值，页面太小将难以浏览。
- `user-scalable`：该属性表示是否允许用户手动进行缩放，可配置no或者yes。当配置成no时，用户将不能通过手势操作的方式对页面进行缩放。

这里需要注意的是viewport只对移动端浏览器有效，对PC端浏览器是无效的。

## 适配与缩放

为了让移动端页面获得更好的显示效果，我们必须让布局视口、视觉视口都尽可能等于理想视口，所以我们一般会设置width=device-width，这就相当于让布局视口等于理想视口；设置initial-scale=1.0，相当于让视觉视口等于理想视口；

## rem适配

> rem（font size of the root element）是CSS3新增的一个相对单位，是指相对于根元素的字体大小的单位。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <title>Document</title>
    <style>
        *{margin:0;padding:0}
        .box{
            width: 10rem;
            height: 4rem;
            background-color: antiquewhite;
            font-size: 0.53rem; /* 20px*/
        }
    </style>
    <script>
        function setRootRem() {
            const root = document.documentElement;
            /** 以iPhone6为例：布局视口为375px，我们把它分成10份，则1rem = 37.5px，
             * 这时UI给定一个元素的宽为375px（设备独立像素），
             * 我们只需要将它设置为375 / 37.5 = 10rem。
            */
            const scale = root.clientWidth / 10
            root.style.fontSize = scale + 'px'  
        }
        setRootRem()
        window.addEventListener('resize', setRootRem)
    </script>
</head>
<body>
    <div class="box">前端南玖</div>
</body>
</html>
```

## vw、vh适配

> vw（Viewport Width）、vh(Viewport Height)是基于视图窗口的单位，是css3中提出来的，基于视图窗口的单位 

> vh、vw方案即将视觉视口宽度 window.innerWidth和视觉视口高度 window.innerHeight 等分为 100 份。

上面的flexible方案就是模仿这种方案，因为早些时候vw还没有得到很好的兼容

- vw(Viewport's width)：1vw等于视觉视口的1%
- vh(Viewport's height) :1vh 为视觉视口高度的1%
- vmin : vw 和 vh 中的较小值
- vmax : 选取 vw 和 vh 中的较大值

如果按视觉视口为375px，那么1vw = 3.75px，这时UI给定一个元素的宽为75px（设备独立像素），我们只需要将它设置为75 / 3.75 = 20vw。

```less
// 还是rem.less 我们加一个@vw变量
@device-width: 375;
@rem: (@device-width/10rem);
@vw: (100vw/@device-width);
```

```vue
<template>
    <div class="songyao">
        <h1>{{ username }}</h1>
    <p>
      了解脚手架及脚手架指令请移步个人博客<br>
      check out the
      <a href="http://47.100.126.169/zmengBlog" target="_blank" rel="noopener">逐梦博客</a>.
    </p>
    <p>微信公众号：<span class="wx_name">前端南玖</span></p>
    </div>
</template>

<script>
export default {
    name: 'songyao',
    data() {
        return {
            username: 'songyao-cli(vue 模板)'
        }
    },
}
</script>

<style lang="less">
.songyao{
    h1{
        // font-size: (24/@rem);
        font-size: 24*@vw;
    }
    p{
        // font-size: (16/@rem);
        font-size: 16*@vw;
    }
   .wx_name{
    color:brown;
    }
}
</style>
```

## viewport + px

在 HTML 的 head 标签里加入 `<meta name="viewport" content="width={设计稿宽度}, initial-scale={屏幕逻辑像素宽度/设计稿宽度}" >` 。

假如UI给我们提供的设计稿宽度时375px，我们则需要将页面的viewport的width设为375，然后再根据设备的逻辑像素将页面进行整体放缩。

```js
export function initViewport() {
    const width = 375;  // 设计稿宽度
    const scale = window.innerWidth / width
    // console.log('scale', scale)
    let meta = document.querySelector('meta[name=viewport]')
    let content = `width=${width}, init-scale=${scale}, user-scalable=no`
    if(!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'viewport')
        document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
}
```

## rem方案总结

- 适配原理稍复杂
- 需要使用 JS
- 设计稿标注的 px 换算到 css 的 rem 计算简单
- 方案灵活，既能实现整体缩放，又能实现局部不缩放

## vw方案总结

- 适配原理简单
- 不需要 JS 即可适配
- 设计稿标注的 px 换算到 css 的 vw 计算复杂
- 方案灵活，既能实现整体缩放，又能实现局部不缩放

## viewport+px方案总结

- 适配原理简单
- 需要使用 JS
- 直接使用设计稿标注无需换算
- 方案死板，只能实现页面级别肢体缩放