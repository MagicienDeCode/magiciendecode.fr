import './gushiwen.less'

import { Collapse } from 'antd'
import React from 'react'

import BackWard from '../../components/backward'
import NavigationBar from '../../components/navigation-bar'

const { Panel } = Collapse

export default function Example() {
  return (
    <div>
      <BackWard path={'/chinese/gushiwen-extra'} />
      <NavigationBar paths="chinese" />
      <div className="gushiwen-main">
        <h1>中国古诗文 * 其他</h1>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="x" key="1" extra={''}>
            <p>，。</p>
          </Panel>
          <Panel header="x" key="2" extra={''}>
            <p>，。</p>
          </Panel>
          <Panel header="x" key="3" extra={''}>
            <p>，。</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
