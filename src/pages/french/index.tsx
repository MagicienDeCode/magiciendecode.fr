import React from 'react'

import PageLink from '../../components/page-link'
import FrenchJson from '../../data/french/title.json'
import { Title } from '../../data/title'

export default function Index() {
  const titles: Title[] = FrenchJson.children.sort((a, b) =>
    a.creationDate < b.creationDate ? 1 : -1
  )
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
