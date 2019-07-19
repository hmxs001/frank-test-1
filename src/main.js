import Vue from 'vue'

// 导入 app 组件
import app from './App.vue'
import Button from './components/Button.vue'


var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  render: c => c(app)
})
