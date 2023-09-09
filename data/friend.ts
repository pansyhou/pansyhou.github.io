export const Friends: Friend[] = [
  {
    title: 'PC',
    description: '会视觉的美团后端小哥',
    website: 'https://pcpengchang.github.io/',
    avatar: '/img/friend/zxuqian.png',
  },

  {
    title: '臭老鼠',
    description: '元宇宙unity工程师',
    website: 'https://thefifthmelancholy.github.io/link/',
    avatar: 'https://thefifthmelancholy.github.io/photos/FIRST.jpg',
  },
  {
    title: 'singlemouse',
    description: '一只沉淀中的鼠鼠',
    website: 'https://singlemouse.cn/',
    avatar: 'https://singlemouse.cn/wp-content/uploads/2023/08/%E7%8E%8B%E6%BC%AB-%E3%83%93%E3%82%AB%E3%83%A9-78428509-.jpg',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
