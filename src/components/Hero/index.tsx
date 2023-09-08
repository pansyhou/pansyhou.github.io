import React from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'

import Link from '@docusaurus/Link'

import HeroMain from './img/hero_main.svg'

import JuejinIcon from '@site/static/svg/juejin.svg'
import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">pansyhou</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text">
            {`在这里你可以了解到各种乱七八糟的知识大杂烩，比如说来点嵌入式、来点前后端=)、我所遇到问题与解决方案、学习笔记，还能看我碎碎念(bushi。`}
          </Translate>
          <br />
          <br />
          <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/skill">
                  <Translate id="hompage.hero.note">学习笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.project">实践项目</Translate>
                </Link>
              ),
              // link: (
              //   <Link to="/resource">
              //     <Translate id="hompage.hero.link">资源导航</Translate>
              //   </Link>
              // ),
              idea: (
                <Link to="/tags/随笔">
                  <Translate id="hompage.hero.idea">碎碎念</Translate>
                </Link>
              ),
              daily: (
                <Link to="/daily">
                  <Translate id="hompage.hero.daily">更新日志</Translate>
                </Link>
              ),
            }}
          >
            {`你可以随处逛逛，查看{note}、{project}、{daily}以及我的{idea}。(往下拉是博客！`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    // twitter: string
    // juejin: string
    // csdn: string
    // qq: string
    // wx: string
    // cloudmusic: string
    // zhihu: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-line" />
      </a>
    </animated.div>
  )
}

export default Hero
