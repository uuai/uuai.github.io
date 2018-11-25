<template>
  <div>
    <div class="find-wrap">
      <div class="find-header">
        <ul class="find-nav">
          <li class="findItem" v-for="(item,index) in findNav" @click="findItem(index)">
            <span :class="findIndex==index?'findItemActive':'headerspan'">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <app-flow></app-flow>
  </div>
</template>

<script>
  import Flow from '../Flow'
  export default {
    name: "Find",
    data() {
      return {
        findIndex: 0,
        findNav: ['推荐', '婚礼', '婚庆', '司仪', '婚车', '蜜月', '旅拍']
      }
    },
    methods: {
      findItem: function (index) {
        this.findIndex = index
      }
    },
    components: {
      "app-flow": Flow,
    }
  }
</script>


<style scoped>
  .find-header {
    width: 100%;
    background: #fff;

  }
  .find-nav {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ccc;
    border-bottom:1px solid #ccc;
    overflow-x: scroll;
    white-space: nowrap;
    display: flex;
  }
  .findItem {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 15px;
  }
  .findItemActive{
    color: #343434;
  }
  .headerspan {
    color: #989898;
  }
</style>
