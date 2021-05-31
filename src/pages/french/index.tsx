import React from 'react'

import PageLink from '../../components/page-link'
import { Title } from '../../data/title'

export default function Index() {
  const titles: Title[] = [new Title('/french/words', '法语单词', '2021-05-27')]
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
