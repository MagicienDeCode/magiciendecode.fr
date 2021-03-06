import React from 'react'

import PageLink from '../../components/page-link'
import JapaneseJson from '../../data/japanese/title.json'
import { Title } from '../../data/title'

export default function Index() {
  const titles: Title[] = JapaneseJson.children.sort((a, b) =>
    a.creationDate < b.creationDate ? 1 : -1
  )
  return (
    <div className="page-index">
      <PageLink titles={titles} />
    </div>
  )
}
