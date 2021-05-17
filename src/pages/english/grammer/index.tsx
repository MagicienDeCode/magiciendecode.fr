import React from 'react'

import PageLink from '../../../components/page-link'
import { Title } from '../../../data/title'

export default function Index() {
  const titles: Title[] = [
    new Title('/english/subjective-mood', '虚拟语气', '2020-08-04'),
  ]
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
