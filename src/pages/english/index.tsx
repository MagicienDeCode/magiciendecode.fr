import './index.less'

import { Row, Tag } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

import PageLink from '../../components/page-link'
import EnglishJson from '../../data/english/title.json'
import { Title } from '../../data/title'

export default function Index() {
  const titles: Title[] = EnglishJson.children.sort((a, b) =>
    a.creationDate < b.creationDate ? 1 : -1
  )
  return (
    <div>
      <Row justify="center" className="english-index-row">
        <Link to="grammer">
          <Tag color="red">英语语法 - English Grammer</Tag>
        </Link>
      </Row>
      <Row justify="center" className="english-index-row">
        <Link to="work">
          <Tag color="violet">工作常用 - Business English</Tag>
        </Link>
      </Row>

      <div className="page-index">
        <PageLink titles={titles} />
      </div>
    </div>
  )
}
