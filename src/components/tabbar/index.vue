<template>
  <div class="app">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home">主页</van-tabbar-item>
			<van-tabbar-item icon="team">队伍</van-tabbar-item>
			<van-tabbar-item icon="own">个人</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script setup>
import { ref } from "vue";

const active = ref("home");
</script>

<style scoped>

</style>
