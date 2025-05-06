<template>
    <!-- 头部信息 -->
    <div class="resume-header" :class="{ hoverd: isHovered }" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false" @click="openEditor">
        <div class="personal-info">
            <h1 class="name">{{ personal?.name }}</h1>
            <div class="contact-info">
                <p>电话：{{ personal?.phone }} | 邮箱：{{ personal?.email }} | 现居城市：{{ personal?.location }}</p>
                <p>求职意向：{{ personal?.objective }}</p>
            </div>
        </div>
        <div class="photo-container">
            <img src="https://v0.dev/placeholder.svg?height=160&width=128" alt="个人照片" class="photo" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface ResumeDataPersonal {
    name: string,
    phone: string,
    email: string,
    location: string,
    objective: string,
}
defineProps<{ personal: ResumeDataPersonal }>()
const emit = defineEmits(['headerOpenEditor'])

const isHovered = ref(false)
const openEditor = () => {
    emit('headerOpenEditor', '基本信息哦')
}

</script>
<style scoped>
/* 头部样式 */
.resume-header {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
}

.resume-header.hoverd {
    background-color: #f0f0f0;
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
