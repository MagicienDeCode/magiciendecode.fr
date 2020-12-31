import './backward.less'

import { Affix, Button } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

import { BackwardFilled } from '@ant-design/icons'

interface BackWardPrpos {
  path: string
}

export default function BackWard({ path }: BackWardPrpos) {
  const previous: string = path.substring(0, path.lastIndexOf('/'))

  return (
    <div>
      <Affix offsetTop={77} className="backward-affix">
        <Link to={previous}>
          <Button type="link">
            <BackwardFilled className="backward-affix-icon" />
          </Button>
        </Link>
      </Affix>
    </div>
  )
}
