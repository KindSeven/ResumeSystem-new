<template>
    <div>select</div>
    <button @click="goToPreView('a')">使用此模版</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const templates = [{ id: 'a', name: '默认模版' }]

const goToPreView = (id: string) => {
    router.push(`/priview/${id}`)

}
</script>
<style scoped></style>
