<template>
  <div class="editor">
    <header class="editor-header">
      <button @click="closeEditor" class="back-btn">
        <span class="back-icon">&#8249;</span> 返回
      </button>
      <h1>{{ title }}</h1>
      <button @click="saveData" class="save-btn">保存</button>
    </header>
    <div class="editor-content">
      <div class="personal">
        <div class="personal-form">
          <div v-for="item in personalContent" :key="item.key" class="form-item">
            <label class="form-label">
              {{ item.label }}
            </label>
            <div class="input-wrapper">
              <input
                type="text"
                placeholder="请输入"
                v-model="localPersonalData[item.key]"
                class="form-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="editor">
      <div></div>
    </div>
    <button @click="closeEditor">关闭</button>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'
import { ref } from 'vue'

interface resumeData {
  [key: string]: string | null
  name: string | null
  phone: string | null
  email: string | null
  location: string | null
  objective: string | null
}

interface SectionData {
  section: string | null
  title: string | null
  data: resumeData
}

const emit = defineEmits(['handleCloseEditor'])
const props = defineProps<SectionData>()
const userStore = useUserStore()

const personalContent = [
  { key: 'name', label: '姓名', placeholder: '请输入姓名' },
  { key: 'phone', label: '电话', placeholder: '请输入电话' },
  { key: 'email', label: '邮箱', placeholder: '请输入邮箱' },
  { key: 'location', label: '地址', placeholder: '请输入地址' },
  { key: 'objective', label: '求职意向', placeholder: '请输入求职意向' },
]

const localPersonalData = ref<resumeData>({
  name: props.data?.name || null,
  phone: props.data?.phone || null,
  email: props.data?.email || null,
  location: props.data?.location || null,
  objective: props.data?.objective || null,
})

const saveData = () => {
  userStore.updatePersonalInfoAll(localPersonalData.value)
  closeEditor()
}

const closeEditor = () => {
  emit('handleCloseEditor')
}

// const updateData = (key: string, value: string) => {
//   userStore.updatePersonalInfo(key, value)
// }
</script>
<style scoped>
.editor {
  max-width: 100%;
  margin: 0 auto;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  min-height: 100vh;
  /* display: flex; */
}
.editor-header {
  /* display: flex;
  justify-content: space-between; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.back-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
}

.back-icon {
  font-size: 20px;
  margin-right: 2px;
}

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.save-btn {
  background: none;
  border: 1px solid #ff6b6b;
  color: #ff6b6b;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.editor-content {
  padding: 20px;
}

.personal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-item {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.form-input::placeholder {
  color: #bbb;
}
</style>
