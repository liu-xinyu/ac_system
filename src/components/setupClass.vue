<template>
  <div class="set-up-container" @click.self="change" :style="{background:isShow?'#000000b3':''}">
    <div class="addClass">
      [管理]
      <br/>
      <ul>
        <li class="item">
          <span @click.self="showClass">添加</span>
        </li>
      </ul>
      <!-- <el-input v-model="money" placeholder="Please input" />
      <el-input v-model="remark" placeholder="Please input" />
      <el-button @click="addClass">创建分类</el-button>
      创建分类{{money}} -->
    </div>
    <div class="show-class" :style="{height:isShow?'60%':'0%'}">
      <ul>
        <li>
          自定义分类
          <el-input v-model="name" placeholder="分类名称" size="small" style="width: 80%;" />
          <span @click="addCustomClass">+</span>
        </li>
        <li v-show="customClassList.length">自定义子类</li>
        <li v-for="item in customClassList">
          <el-input v-model="item.tagName" placeholder="子分类名称" size="small" style="width: 60%;" />
        </li>
      </ul>
      <el-button @click="createTagBtn">确定</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createBill } from '../api/bill'
import { createTag } from '../api/tag'
import { ref, reactive } from 'vue';

type customClass = {
  tagName: string
}

const money = ref(0);
const remark = ref('bv');

let addClass = () => {
  // if (money.value <= 0) {
  //   return;
  // }
  // createBill({ money: money.value + '', remark: remark.value })
}
// 点击添加分类按钮
const isShow = ref(false)
let showClass = () => {
  isShow.value = true
  console.log(true);

}
// 点击萌态框
const change = () => {
  isShow.value = false
  console.log(false);

}




// 新增自定义标签 
let customClassList: customClass[] = reactive([])
const name = ref('bv');
let addCustomClass = () => {
  customClassList.push({ tagName: '' })
}
// 点击确定
let createTagBtn = () => {
  createTag({
    tagName: name.value,
    belongBookId: 1,
    isAddBudget: 0,
    isAddStatistics: 0,
    textColor: 'red',
    bgColor: 'black',
    pid: 0,
    childTagList: customClassList
  })
}
//
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.set-up-container {
  width: 100%;
  height: calc(100% - 30px);
  transition: 0.5s;
}

.item {
  list-style: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000b3;
}

.show-class {
  width: 100%;
  background: yellowgreen;
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  bottom: 30px;
  transition: 0.3s;
}
</style>
