<template>
  <div>
    <button class="g-button">测试按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    // 注意：组件中的 data 必须是 function
    return {
      msg: "123"
    };
  },
  methods: {
    show() {
      console.log("调用了 login.vue 中的 show 方法");
    }
  }
};
</script>

<style lang="scss" scoped>
.g-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover{
        background-color: var(--border-color-hover);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
}
</style>
