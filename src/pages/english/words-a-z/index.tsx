import './index.less'

import { Tag } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

export default function Index() {
  return (
    <div className="page-index">
      <div className="a-z">
        <Link to="a">
          <Tag color="magenta" className="a-z-tag">
            A-a
          </Tag>
        </Link>
        <Link to="b">
          <Tag color="red" className="a-z-tag">
            B-b
          </Tag>
        </Link>
        <Tag color="volcano" className="a-z-tag">
          volcano
        </Tag>
        <Tag color="orange" className="a-z-tag">
          orange
        </Tag>
        <Tag color="gold" className="a-z-tag">
          gold
        </Tag>
        <Tag color="lime" className="a-z-tag">
          lime
        </Tag>
        <Tag color="green" className="a-z-tag">
          green
        </Tag>
        <Tag color="cyan" className="a-z-tag">
          cyan
        </Tag>
        <Tag color="blue" className="a-z-tag">
          blue
        </Tag>
        <Tag color="geekblue" className="a-z-tag">
          geekblue
        </Tag>
        <Tag color="purple" className="a-z-tag">
          purple
        </Tag>
        <Tag color="red" className="a-z-tag">
          red
        </Tag>
        <Tag color="volcano" className="a-z-tag">
          volcano
        </Tag>
        <Tag color="orange" className="a-z-tag">
          orange
        </Tag>
        <Tag color="gold" className="a-z-tag">
          gold
        </Tag>
        <Tag color="lime" className="a-z-tag">
          lime
        </Tag>
        <Tag color="green" className="a-z-tag">
          green
        </Tag>
        <Tag color="cyan" className="a-z-tag">
          cyan
        </Tag>
        <Tag color="blue" className="a-z-tag">
          blue
        </Tag>
        <Tag color="geekblue" className="a-z-tag">
          geekblue
        </Tag>
        <Tag color="purple" className="a-z-tag">
          purple
        </Tag>
      </div>
    </div>
  )
}
