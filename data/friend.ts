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
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
