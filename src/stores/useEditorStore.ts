import { defineStore } from 'pinia'

interface EditorStore {
  isOpen: boolean
  currentSection: string | null
}

export const useEditorStore = defineStore('editorStore', {
  state: (): EditorStore => ({
    isOpen: false,
    currentSection: null,
  }),

  actions: {
    openEditor(section: string) {
      this.isOpen = true
      this.currentSection = section
    },
    closeEditor() {
      this.isOpen = false
      this.currentSection = null
    },
  },
})
