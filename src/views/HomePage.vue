<template>
    <div class="home">
        <h1>欢迎来到简历制作系统</h1>
        <p>快速创建专业化的个人简历，助你脱颖而出！</p>
        <!-- <router-link to="/editor" class="start-button">开始制作简历</router-link> -->
        <button @click="start">开始使用</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const start = () => {
    // 跳转到编辑器页面
    router.push('/template')
}
</script>

<style scoped>
.home {
    text-align: center;
    padding: 5rem 1rem;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.start-button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
}

.start-button:hover {
    background-color: #3aa876;
}
</style>
