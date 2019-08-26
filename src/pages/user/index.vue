<template id="tmp1">

 <div>
   <van-cell-group>
     <van-field
       v-model="username"
       required
       clearable
       label="账号"
       right-icon="question-o"
       placeholder="请输入账号"
       @click-right-icon="$toast('question')"
     />

     <van-field
       v-model="password"
       type="password"
       label="密码"
       placeholder="请输入密码"
       required
     />
   </van-cell-group>
  
   <van-button type="default"  color="#7232dd">注册</van-button>
 </div>

</template>

<script>

</script>

<style>

</style>
