export const Friends: Friend[] = [
  {
    title: 'PC',
    description: '会视觉的美团后端小哥',
    website: 'https://pcpengchang.github.io/',
    avatar: '/img/friend/zxuqian.png',
  },

]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
