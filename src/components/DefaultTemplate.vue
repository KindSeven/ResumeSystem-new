<template>
    <div>ß545</div>
    <div class="resume-container">

        <ResumeHeader />

        <EducationalExp />

        <HonorsAwards />

        <InternshipExp />

    </div>

</template>
<script setup lang="ts">
import EducationalExp from "./template/EducationalExp.vue";
import HonorsAwards from "./template/HonorsAwards.vue";
import InternshipExp from "./template/InternshipExp.vue";
import ResumeHeader from "./template/ResumeHeader.vue";


</script>
<style scoped>
.resume-container {
    width: 100%;
    margin: 0 auto;
    padding: 24px;
    background-color: white;
    font-family: Arial, sans-serif;
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







/* 响应式样式
@media (min-width: 768px) {
    .resume-header {
        
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
} */
</style>
