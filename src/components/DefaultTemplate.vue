<template>
    <div>ß545</div>
    <div class="resume-container">
        <!-- 头部信息 -->
        <header class="resume-header">
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
        </header>

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

        <!-- 荣誉/奖项 -->
        <section class="resume-section">
            <h2 class="section-title">荣誉 / 奖项</h2>
            <div class="section-divider"></div>

            <div class="awards-list">
                <div class="award-item">
                    <p class="award-name">第十五届ACM-ICPC程序设计大赛省赛铜奖</p>
                    <p class="award-date">2023.06</p>
                </div>
                <div class="award-item">
                    <p class="award-name">2023天梯赛团体程序设计大赛全国总决赛三等奖</p>
                    <p class="award-date">2023.04</p>
                </div>
                <div class="award-item">
                    <p class="award-name">第十五届蓝桥杯全国软件和信息技术专业人才大赛软件赛省级二等奖</p>
                    <p class="award-date">2023.04</p>
                </div>
                <div class="award-item">
                    <p class="award-name">全国大学生数字媒体科技作品及创意竞赛省级三等奖</p>
                    <p class="award-date">2023.10</p>
                </div>
                <div class="award-item">
                    <p class="award-name">校级一等奖学金</p>
                    <p class="award-date">2022.10</p>
                </div>
                <div class="award-item">
                    <p class="award-name">英语四级(CET4)</p>
                    <p class="award-date"></p>
                </div>
            </div>
        </section>

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
    </div>

</template>
<script setup lang="ts">

</script>
<style scoped>
.resume-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
    background-color: white;
    font-family: Arial, sans-serif;
}

/* 头部样式 */
.resume-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
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

/* 部分样式 */
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

/* 教育经历样式 */
.education-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
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

/* 荣誉/奖项样式 */
.awards-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.award-item {
    display: flex;
    flex-direction: column;
}

.award-name {
    margin: 0;
}

.award-date {
    font-size: 14px;
    margin: 0;
}

/* 实习经历样式 */
.experience-item {
    margin-bottom: 16px;
}

.experience-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
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

/* 响应式样式 */
@media (min-width: 768px) {
    .resume-header {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .personal-info {
        text-align: left;
    }

    .photo-container {
        margin-top: 0;
    }

    .education-item,
    .award-item,
    .experience-header {
        flex-direction: row;
        justify-content: space-between;
    }

    .education-details,
    .award-name {
        flex: 1;
    }
}
</style>
