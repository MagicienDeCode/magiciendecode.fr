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
          <Panel header="题龙阳县青草湖" key="1" extra={'唐温如'}>
            <p>西风吹老洞庭波，一夜湘君白发多。</p>
            <p>醉后不知天在水，满船清梦压星河。</p>
          </Panel>
          <Panel header="x" key="2" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="七绝·改诗赠父亲" key="3" extra={''}>
            <p>孩儿立志出乡关，学不成名誓不还。</p>
            <p>埋骨何须桑梓地，人生无处不青山。</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
