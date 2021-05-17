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
  ]
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
