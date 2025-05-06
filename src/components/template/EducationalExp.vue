<template>
    <!-- 教育经历 -->
    <section class="resume-section">
        <h2 class="section-title">教育经历</h2>
        <div class="section-divider"></div>

        <div class="education-item">
            <div class="education-details">
                <h3 class="school-name">北京信息科技大学</h3>
                <p class="major">计算机科学与技术 本科</p>
            </div>
            <p class="date">2020年09月 — 2024年06月</p>
        </div>
    </section>
</template>
<script setup lang="ts">

</script>
<style scoped>
/* 教育经历样式 */

.resume-section {
    margin-bottom: 32px;
}

.section-title {
    font-size: 18px;
    font-weight: bold;
    color: #1677ff;
    margin-bottom: 8px;
}

.section-divider {
    height: 2px;
    background-color: #1677ff;
    margin-bottom: 16px;
}

.education-item {
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
}

.school-name {
    font-weight: bold;
}

.major {
    font-size: 14px;
}

.date {
    font-size: 14px;
}
</style>
