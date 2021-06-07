import React from 'react'

import PageLink from '../../../components/page-link'
import { Title } from '../../../data/title'

export default function Index() {
  const titles: Title[] = [
    new Title(
      '/english/self-evaluation',
      'self-evaluation 自我评价',
      '2021-02-14'
    ),
    new Title(
      '/english/write-a-formal',
      'Write a formal 正规信件',
      '2021-03-16'
    ),
    new Title(
      '/english/self-introduction',
      'self-introduction 自我介绍',
      '2021-06-02'
    ),
  ]
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
