// 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')

import './banner'
import './tabs'

import $ from 'jquery'
$('#swiper').css('background-color', 'red')

import './style/index.css'
import './style/index.less'

// 引入字体图标文件
import './assets/fonts/iconfont.css'

// index.js
import imgUrl from './assets/1.gif'

let img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)

class App {
  static a = 123
}

console.log(App.a)

const fn = () => {
  console.log(111)
}
fn()

import vue from 'vue'
