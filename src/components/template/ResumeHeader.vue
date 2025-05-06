<template>
    <!-- 头部信息 -->
    <div class="resume-header">
        <div class="personal-info">
            <h1 class="name">张明华</h1>
            <div class="contact-info">
                <p>电话：17612345678 | 邮箱：example@qq.com | 现居城市：北京</p>
                <p>求职意向：前端开发工程师</p>
            </div>
        </div>
        <div class="photo-container">
            <img src="https://v0.dev/placeholder.svg?height=160&width=128" alt="个人照片" class="photo" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const personal = ref({
    name: '张明华',
    phone: '17612345678',
    email: 'example@qq.com',
    city: '北京',
    jobTitle: '前端开发工程师',
    photo: 'https://v0.dev/placeholder.svg?height=160&width=128',
})
</script>
<style scoped>
/* 头部样式 */
.resume-header {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.personal-info {
    text-align: center;
    flex: 1;
}

.name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
}

.contact-info {
    font-size: 14px;
}

.photo-container {
    margin-top: 16px;
}

.photo {
    width: 128px;
    height: 160px;
    border: 2px solid #ccc;
}
</style>
