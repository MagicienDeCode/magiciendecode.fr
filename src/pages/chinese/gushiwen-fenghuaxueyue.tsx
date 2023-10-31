import './gushiwen.less'

import { Collapse } from 'antd'
import React from 'react'

import BackWard from '../../components/backward'
import NavigationBar from '../../components/navigation-bar'

const { Panel } = Collapse

export default function Example() {
  return (
    <div>
      <BackWard path={'/chinese/gushiwen-fenghuaxueyue'} />
      <NavigationBar paths="chinese" />
      <div className="gushiwen-main">
        <h1>中国古诗文 * 风花雪月</h1>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="风" key="1" extra={''}>
            <p>西风吹老洞庭波，一夜湘君白发多。醉后不知天在水，满船清梦压星河。</p>
            <p>春风又绿江南岸，明月何时照我还？</p>
            <p>桃李春风一杯酒，江湖夜雨十年灯。</p>
            <p>宁可枝头抱香死，何曾吹落北风中。</p>
            <p>沾衣欲湿杏花雨，吹面不寒杨柳风。</p>
            <p>夜阑卧听风吹雨，铁马冰河入梦来。</p>
            <p>人生自是有情痴，此恨不关风与月。</p>
            <p>直须看尽洛城花，始共春风容易别。</p>
            <p>城阙辅三秦，风烟望五津。</p>
            <p>春风得意马蹄疾，一日看尽长安花。</p>
            <p>北风卷地白草折，胡天八月即飞雪。</p>
            <p>忽如一夜春风来，千树万树梨花开。</p>
            <p>纷纷暮雪下辕门，风掣红旗冻不翻。</p>
            <p>不知细叶谁裁出，二月春风似剪刀。</p>
            <p>林暗草惊风，将军夜引弓。</p>
            <p>云想衣裳花想容，春风拂槛露华浓。</p>
            <p>谁家玉笛暗飞声，散入春风满洛城。</p>
            <p>羌笛何须怨杨柳，春风不度玉门关。</p>
            <p>柴门闻犬吠，风雪夜归人。</p>
            <p>千里黄云白日曛，北风吹雁雪纷纷。</p>
            <p>垂死病中惊坐起，暗风吹雨入寒窗。</p>
            <p>扫眉才子于今少，管领春风总不如。</p>
            <p>画图省识春风面，环珮空归夜月魂。</p>
          </Panel>
          <Panel header="花" key="2" extra={''}>
            <p>花开不并百花丛，独立疏篱趣未穷。</p>
            <p>沾衣欲湿杏花雨，吹面不寒杨柳风。</p>
            <p>直须看尽洛城花，始共春风容易别。</p>
            <p>接天莲叶无穷碧，映日荷花别样红。</p>
            <p>忽如一夜春风来，千树万树梨花开。</p>
            <p>商女不知亡国恨，隔江犹唱后庭花。</p>
            <p>花间一壶酒，独酌无相亲。</p>
            <p>乱花渐欲迷人眼，浅草才能没马蹄。</p>
            <p>待到秋来九月八，我花开后百花杀。</p>
            <p>取次花丛懒回顾，半缘修道半缘君。</p>
            <p>云想衣裳花想容，春风拂槛露华浓。</p>
            <p>停车坐爱枫林晚，霜叶红于二月花。</p>
            <p>朱雀桥边野草花，乌衣巷口夕阳斜。</p>
            <p>正是江南好风景，落花时节又逢君。</p>
            <p>唯有牡丹真国色，花开时节动京城。</p>
            <p>杨花落尽子规啼，闻道龙标过五溪。</p>
            <p>春心莫共花争发，一寸相思一寸灰！</p>
            <p>黄四娘家花满蹊，千朵万朵压枝低。</p>
          </Panel>
          <Panel header="雪" key="3" extra={''}>
            <p>北风卷地白草折，胡天八月即飞雪。</p>
            <p>纷纷暮雪下辕门，风掣红旗冻不翻。</p>
            <p>轮台东门送君去，去时雪满天山路。</p>
            <p>山回路转不见君，雪上空留马行处。</p>
            <p>君埋泉下泥销骨，我寄人间雪满头。</p>
            <p>柴门闻犬吠，风雪夜归人。</p>
            <p>千里黄云白日曛，北风吹雁雪纷纷。</p>
            <p>云横秦岭家何在？雪拥蓝关马不前。</p>
            <p>晚来天欲雪，能饮一杯无？</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="月" key="3" extra={''}>
            <p>春风又绿江南岸，明月何时照我还？</p>
            <p>人生自是有情痴，此恨不关风与月。</p>
            <p>人生得意须尽欢，莫使金樽空对月。</p>
            <p>鸟宿池边树，僧敲月下门。</p>
            <p>烟笼寒水月笼沙，夜泊秦淮近酒家。</p>
            <p>举杯邀明月，对影成三人。</p>
            <p>可怜九月初三夜，露似真珠月似弓。</p>
            <p>登舟望秋月，空忆谢将军。</p>
            <p>空将汉月出宫门，忆君清泪如铅水。</p>
            <p>携盘独出月荒凉，渭城已远波声小。</p>
            <p>秦时明月汉时关，万里长征人未还。</p>
            <p>知君用心如日月，事夫誓拟同生死。</p>
            <p>沧海月明珠有泪，蓝田日暖玉生烟。</p>
            <p>我寄愁心与明月，随君直到夜郎西。</p>
            <p>画图省识春风面，环珮空归夜月魂。</p>
            <p>青天有月来几时，我今停杯一问之。</p>
            <p>人攀明月不可得，月行却与人相随。</p>
            <p>今人不见古时月，今月曾经照古人。</p>
            <p>古人今人若流水，共看明月皆如此。</p>
            <p>唯愿当歌对酒时，月光长照金樽里。</p>
          </Panel>
          <Panel header="" key="4" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="" key="5" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="" key="6" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="7" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="8" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="9" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="10" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="11" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="12" extra={''}>
            <p></p>
            <p></p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
