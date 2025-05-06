<template>
    <!-- 实习经历 -->
    <section class="resume-section">
        <h2 class="section-title">实习经历</h2>
        <div class="section-divider"></div>

        <div class="experience-item">
            <div class="experience-header">
                <h3 class="company-name">科技有限公司</h3>
                <p class="experience-date">2023年12月 — 2024年03月</p>
            </div>
            <p class="job-title">前端开发</p>
            <p class="job-description">负责公司产品的前端开发与维护，参与项目从设计到上线的全过程</p>
            <ul class="achievements-list">
                <li>主要技术：React, TypeScript, Taro</li>
                <li>参与公司产品功能联调与bug修复，与开发和测试同时高效沟通</li>
                <li>基于Taro开发小程序，负责多个核心页面的开发和维护</li>
                <li>实现了用户认证模块，组件复用率提升70%，覆盖了6个核心场景</li>
                <li>独立开发药品执行流程页面，通过状态机控制流程，支持85%执行准确率提升</li>
            </ul>
        </div>
    </section>
</template>
<script setup lang="ts">

</script>
<style scoped>
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

/* 实习经历样式 */
.experience-item {
    margin-bottom: 16px;

}

.experience-header {
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
}

.company-name {
    font-weight: bold;
    margin: 0;
}

.experience-date {
    font-size: 14px;
    margin: 0;
}

.job-title {
    margin-bottom: 8px;
}

.job-description {
    font-size: 14px;
    margin-bottom: 8px;
}

.achievements-list {
    padding-left: 24px;
    font-size: 14px;
}

.achievements-list li {
    margin-bottom: 8px;
}
</style>
