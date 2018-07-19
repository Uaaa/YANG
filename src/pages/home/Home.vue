<!--整个页面最外层的一个容器组件：将其拆分成很多小的组件
放到components中-->
<template>
	<div>
		<!--vue会把大小写字母做关联home-header就是HomeHeader组件-->
		<home-header></home-header>
	</div>
</template>
<script>
	import HomeHeader from './components/Header.vue'
	export default{
		name:'Home',
		components:{
			//引入 HomeHeader 组件注册到 Home
			HomeHeader
		}
	}
</script>
<style>
	
</style>