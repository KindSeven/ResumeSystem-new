import { defineStore } from 'pinia'

interface EditorStore {
  isOpen: boolean
  currentSection: string | null
  title: string | null
}

export const useEditorStore = defineStore('editorStore', {
  state: (): EditorStore => ({
    isOpen: false,
    currentSection: null,
    title: null,
  }),

  actions: {
    openEditor(section: string, title: string) {
      this.isOpen = true
      this.currentSection = section
      this.title = title
    },
    closeEditor() {
      this.isOpen = false
      this.currentSection = null
      this.title = null
    },
  },
})
