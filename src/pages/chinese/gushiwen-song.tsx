import './gushiwen.less'

import { Collapse } from 'antd'
import React from 'react'

import BackWard from '../../components/backward'
import NavigationBar from '../../components/navigation-bar'

const { Panel } = Collapse

export default function Example() {
  return (
    <div>
      <BackWard path={'/chinese/gushiwen-song'} />
      <NavigationBar paths="chinese" />
      <div className="gushiwen-main">
        <h1>中国古诗文 * 宋</h1>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="元日" key="1" extra={'王安石'}>
            <p>爆竹声中一岁除，春风送暖入屠苏。</p>
            <p>千门万户曈曈日，总把新桃换旧符。</p>
          </Panel>
          <Panel header="泊船瓜洲" key="2" extra={'王安石'}>
            <p>京口瓜洲一水间，钟山只隔数重山。</p>
            <p>春风又绿江南岸，明月何时照我还？</p>
          </Panel>
          <Panel header="寄黄几复" key="3" extra={'黄庭坚'}>
            <p>我居北海君南海，寄雁传书谢不能。</p>
            <p>桃李春风一杯酒，江湖夜雨十年灯。</p>
            <p>持家但有四立壁，治病不蕲三折肱。</p>
            <p>想见读书头已白，隔溪猿哭瘴溪藤。</p>
          </Panel>
          <Panel header="寒菊 / 画菊" key="4" extra={'郑思肖'}>
            <p>花开不并百花丛，独立疏篱趣未穷。</p>
            <p>宁可枝头抱香死，何曾吹落北风中。</p>
          </Panel>
          <Panel header="绝句" key="5" extra={'志南'}>
            <p>古木阴中系短篷，杖藜扶我过桥东。</p>
            <p>沾衣欲湿杏花雨，吹面不寒杨柳风。</p>
          </Panel>
          <Panel header="十一月四日风雨大作" key="6" extra={'陆游'}>
            <p>僵卧孤村不自哀，尚思为国戍轮台。</p>
            <p>夜阑卧听风吹雨，铁马冰河入梦来。</p>
          </Panel>
          <Panel header="临安春雨初霁" key="7" extra={'陆游'}>
            <p>世味年来薄似纱，谁令骑马客京华。</p>
            <p>小楼一夜听春雨，深巷明朝卖杏花。</p>
            <p>矮纸斜行闲作草，晴窗细乳戏分茶。</p>
            <p>素衣莫起风尘叹，犹及清明可到家。</p>
          </Panel>
          <Panel header="登快阁" key="8" extra={'黄庭坚'}>
            <p>痴儿了却公家事，快阁东西倚晚晴。</p>
            <p>落木千山天远大，澄江一道月分明。</p>
            <p>朱弦已为佳人绝，青眼聊因美酒横。</p>
            <p>万里归船弄长笛，此心吾与白鸥盟。</p>
          </Panel>
          <Panel header="玉楼春" key="9" extra={'欧阳修'}>
            <p>尊前拟把归期说。未语春容先惨咽。</p>
            <p>人生自是有情痴，此恨不关风与月。</p>
            <p>离歌且莫翻新阕。一曲能教肠寸结。</p>
            <p>直须看尽洛城花，始共春风容易别。</p>
          </Panel>
          <Panel header="晓出净慈寺送林子方" key="10" extra={'杨万里'}>
            <p>毕竟西湖六月中，风光不与四时同。</p>
            <p>接天莲叶无穷碧，映日荷花别样红。</p>
          </Panel>
          <Panel header="芙蓉楼送辛渐" key="11" extra={'王昌龄'}>
            <p>寒雨连江夜入吴，平明送客楚山孤。</p>
            <p>洛阳亲友如相问，一片冰心在玉壶。</p>
          </Panel>
          <Panel header="x" key="12" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="13" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="14" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="11" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="11" extra={''}>
            <p></p>
            <p></p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
