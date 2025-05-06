<template>
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

/* 荣誉/奖项样式 */
.awards-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.award-item {
    display: flex;
    justify-content: space-between;
}

.award-name {
    margin: 0;
}

.award-date {
    font-size: 14px;
    margin: 0;
}
</style>
