<template>
	<div class="header">
		<div class="header-left">
			 <div class="iconfont back-icon">&#xe604;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe612;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">城市
			<span class="iconfont" arrow-icon>&#xe615;</span>
		</div>
	</div>
</template>
<script>
	export default{
		//组件名
		name:'HomeHeader'
	}
</script>
<!--scoped保证样式只对当前组件起作用 不会造成对其他组建的影响 保证样式为局部化的样式-->
<!--设计图是二倍尺寸的图片-->
<!--1rem 100px  43px 对应0.43rem-->
<style lang='scss' src='./style.scss'></style>