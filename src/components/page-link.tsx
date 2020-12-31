import './page-link.less'

import { Timeline } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

import { Title } from '../data/title'

interface PageLinkProps {
  titles: Title[]
}

export default function PageLink({ titles }: PageLinkProps) {
  return (
    <div>
      <Timeline mode={'left'}>
        {titles.map((title: Title, index: number) => (
          <Timeline.Item key={index} label={title.creationDate}>
            <Link to={title.page}>{title.title}</Link>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}
