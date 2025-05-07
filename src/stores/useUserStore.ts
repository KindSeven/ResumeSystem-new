import { defineStore } from 'pinia'

interface PersonalInfo {
  // [key: string]: string
  name: string | null
  phone: string | null
  email: string | null
  location: string | null
  objective: string | null
}

// interface UserResumeData {
//   personal: PersonalInfo
// }

export const useUserStore = defineStore('userStore', {
  state: () => ({
    showEditor: false,
    currentEditItem: null,
    styleSettings: {
      themeColor: '#1677ff',
      fontFamily: 'Arial, sans-serif',
      fontSize: 14,
      lineHeight: 1.5,
      pagePadding: 24,
    },
    resumeData: {
      personal: {
        name: '张明华',
        phone: '17612345678',
        email: 'example@qq.com',
        location: '北京',
        objective: '前端开发工程师',
      },
      sections: [
        {
          title: '教育经历',
          type: 'education',
          items: [
            {
              school: '北京信息科技大学',
              major: '计算机科学与技术 本科',
              date: '2020年09月 — 2024年06月',
            },
          ],
        },
        {
          title: '荣誉 / 奖项',
          type: 'award',
          items: [
            { name: '第十五届ACM-ICPC程序设计大赛省赛铜奖', date: '2023.06' },
            { name: '2023天梯赛团体程序设计大赛全国总决赛三等奖', date: '2023.04' },
            {
              name: '第十五届蓝桥杯全国软件和信息技术专业人才大赛软件赛省级二等奖',
              date: '2023.04',
            },
            { name: '全国大学生数字媒体科技作品及创意竞赛省级三等奖', date: '2023.10' },
            { name: '校级一等奖学金', date: '2022.10' },
            { name: '英语四级(CET4)', date: '' },
          ],
        },
        {
          title: '实习经历',
          type: 'experience',
          items: [
            {
              company: '科技有限公司',
              title: '前端开发',
              date: '2023年12月 — 2024年03月',
              department: '研发部 · 北京',
              description: `<p>负责公司产品的前端开发与维护，参与项目从设计到上线的全过程</p>
                <ul>
                  <li>主要技术：React, TypeScript, Taro</li>
                  <li>参与公司产品功能联调与bug修复，与开发和测试同时高效沟通</li>
                  <li>基于Taro开发小程序，负责多个核心页面的开发和维护</li>
                  <li>实现了用户认证模块，组件复用率提升70%，覆盖了6个核心场景</li>
                  <li>独立开发药品执行流程页面，通过状态机控制流程，支持85%执行准确率提升</li>
                </ul>`,
            },
          ],
        },
      ],
    },
    newModule: {
      type: 'education',
      title: '',
    },
    // 新增智能一页相关数据
    smartPageEnabled: false,
    pageOverflow: false,
    scaleFactor: 1,
    pageSettings: {
      format: 'A4',
      width: 210 * 3.78, // A4宽度，mm转为px (近似值)
      height: 297 * 3.78, // A4高度，mm转为px (近似值)
      minScaleFactor: 0.7, // 最小缩放比例
    },
    resizeObserver: null,
  }),
  actions: {
    updatePersonalInfo(key: string, value: string) {
      this.resumeData.personal[key] = value
    },

    updatePersonalInfoAll(info: PersonalInfo) {
      this.resumeData.personal = info
    },
  },
})
