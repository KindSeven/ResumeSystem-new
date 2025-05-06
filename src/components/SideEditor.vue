<template>
    <div>
        <h3>编辑{{ section }}</h3>
        <div class="editor"></div>
        <button @click="closeEditor">关闭</button>
    </div>
</template>
<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditorStore';

const editorStore = useEditorStore();

interface SectionData {
    section: string | null;
}
defineProps<SectionData>();

const closeEditor = () => {
    editorStore.closeEditor();
}
</script>
<style scoped></style>
