import './gushiwen.less'

import { Collapse } from 'antd'
import React from 'react'

import BackWard from '../../components/backward'
import NavigationBar from '../../components/navigation-bar'

const { Panel } = Collapse

export default function Example() {
  return (
    <div>
      <BackWard path={'/chinese/gushiwen-tang'} />
      <NavigationBar paths="chinese" />
      <div className="gushiwen-main">
        <h1>中国古诗文 * 唐</h1>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="将进酒" key="1" extra={'唐*李白'}>
            <p>君不见，黄河之水天上来，奔流到海不复回。</p>
            <p>君不见，高堂明镜悲白发，朝如青丝暮成雪。</p>
            <p>人生得意须尽欢，莫使金樽空对月。</p>
            <p>天生我材必有用，千金散尽还复来。</p>
            <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
            <p>岑cén夫子，丹丘生，将进酒，杯莫停。</p>
            <p>与君歌一曲，请君为我倾耳听。</p>
            <p>钟鼓馔玉不足贵，但求长醉不复醒。</p>
            <p>古来圣贤皆寂寞，惟有饮者留其名。</p>
            <p>陈王昔时宴平乐，斗酒十千恣欢谑xuè。</p>
            <p>主人何为言少钱，径须沽取对君酌。</p>
            <p>五花马，千金裘，呼儿将出换美酒。与尔同销万古愁。</p>
            <p></p>
            <p>陈王: 曹植</p>
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
