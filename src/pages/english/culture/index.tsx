import React from 'react'

import PageLink from '../../../components/page-link'
import { Title } from '../../../data/title'

export default function Index() {
  const titles: Title[] = [
    new Title(
      '/english/beginning-of-spring',
      'Beginning of Spring 立春',
      '2021-05-17'
    ),
    new Title('/english/rain-water', 'Rain Water 雨水', '2021-05-20'),
    new Title('/english/pure-brightness', 'Pure Brightness 清明', '2021-05-26'),
    new Title(
      '/english/beginning-of-summer',
      'Beginning of Spring 立夏',
      '2021-05-31'
    ),
    new Title('/english/summer-solstice', 'Summer Solstice 夏至', '2021-06-07'),
    new Title(
      '/english/beginning-of-autumn',
      'Beginning of Autumn 立秋',
      '2021-06-09'
    ),
  ]
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
