<template>
    <div>664</div>
    <currentTemplate />
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, type DefineComponent } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute()
const templatesMap: Record<string, any> = {
    a: defineAsyncComponent(() => import('../components/DefaultTemplate.vue')),
}
const templateId = computed(() => router.params.templateId)
console.log(templateId.value);

const currentTemplate = computed(() => templatesMap[templateId.value])
</script>
<style scoped></style>
