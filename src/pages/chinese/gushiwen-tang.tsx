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
          <Panel header="将进酒" key="1" extra={'李白'}>
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
          <Panel header="送杜少府之任蜀州" key="2" extra={'王勃'}>
            <p>城阙辅三秦，风烟望五津。</p>
            <p>与君离别意，同是宦游人。</p>
            <p>海内存知己，天涯若比邻。</p>
            <p>无为在歧路，儿女共沾巾。</p>
          </Panel>
          <Panel header="望岳" key="3" extra={'杜甫'}>
            <p>岱宗夫如何？齐鲁青未了。</p>
            <p>造化钟神秀，阴阳割昏晓。</p>
            <p>荡胸生曾云，决眦入归鸟。</p>
            <p>会当凌绝顶，一览众山小。</p>
          </Panel>
          <Panel header="登科后" key="4" extra={'孟郊'}>
            <p>昔日龌龊不足夸，今朝放荡思无涯。</p>
            <p>春风得意马蹄疾，一日看尽长安花。</p>
          </Panel>
          <Panel header="黄鹤楼" key="5" extra={'崔颢'}>
            <p>昔人已乘黄鹤去，此地空余黄鹤楼。</p>
            <p>黄鹤一去不复返，白云千载空悠悠。</p>
            <p>晴川历历汉阳树，芳草萋萋鹦鹉洲。</p>
            <p>日暮乡关何处是？烟波江上使人愁。</p>
          </Panel>
          <Panel header="题李凝幽居" key="6" extra={'贾岛'}>
            <p>闲居少邻并，草径入荒园。</p>
            <p>鸟宿池边树，僧敲月下门。</p>
            <p>过桥分野色，移石动云根。</p>
            <p>暂去还来此，幽期不负言。</p>
          </Panel>
          <Panel header="金陵晚望" key="7" extra={'高蟾'}>
            <p>曾伴浮云归晚翠，犹陪落日泛秋声。</p>
            <p>世间无限丹青手，一片伤心画不成。</p>
          </Panel>
          <Panel header="白雪歌送武判官归京" key="8" extra={'岑参'}>
            <p>北风卷地白草折，胡天八月即飞雪。</p>
            <p>忽如一夜春风来，千树万树梨花开。</p>
            <p>散入珠帘湿罗幕，狐裘不暖锦衾薄。</p>
            <p>将军角弓不得控，都护铁衣冷难着。</p>
            <p>瀚海阑干百丈冰，愁云惨淡万里凝。</p>
            <p>中军置酒饮归客，胡琴琵琶与羌笛。</p>
            <p>纷纷暮雪下辕门，风掣红旗冻不翻。</p>
            <p>轮台东门送君去，去时雪满天山路。</p>
            <p>山回路转不见君，雪上空留马行处。</p>
          </Panel>
          <Panel header="泊秦淮" key="9" extra={'杜牧'}>
            <p>烟笼寒水月笼沙，夜泊秦淮近酒家。</p>
            <p>商女不知亡国恨，隔江犹唱后庭花。</p>
          </Panel>
          <Panel header="相思" key="10" extra={'王维'}>
            <p>红豆生南国，春来发几枝。</p>
            <p>愿君多采撷，此物最相思。</p>
          </Panel>
          <Panel header="送元二使安西" key="11" extra={'王维'}>
            <p>渭城朝雨浥轻尘，客舍青青柳色新。</p>
            <p>劝君更尽一杯酒，西出阳关无故人。</p>
          </Panel>
          <Panel header="南歌子词二首" key="12" extra={'温庭筠'}>
            <p>一尺深红蒙曲尘，天生旧物不如新。</p>
            <p>合欢桃核终堪恨，里许元来别有人。</p>
            <p>井底点灯深烛伊，共郎长行莫围棋。</p>
            <p>玲珑骰子安红豆，入骨相思知不知。</p>
          </Panel>
          <Panel header="月下独酌四首" key="13" extra={'李白'}>
            <p>花间一壶酒，独酌无相亲。</p>
            <p>举杯邀明月，对影成三人。</p>
            <p>月既不解饮，影徒随我身。</p>
            <p>暂伴月将影，行乐须及春。</p>
            <p>我歌月徘徊，我舞影零乱。</p>
            <p>醒时相交欢，醉后各分散。</p>
            <p>永结无情游，相期邈云汉。</p>
          </Panel>
          <Panel header="咏柳" key="14" extra={'贺知章'}>
            <p>碧玉妆成一树高，万条垂下绿丝绦。</p>
            <p>不知细叶谁裁出，二月春风似剪刀。</p>
          </Panel>
          <Panel header="钱塘湖春行" key="15" extra={'白居易'}>
            <p>孤山寺北贾亭西，水面初平云脚低。</p>
            <p>几处早莺争暖树，谁家新燕啄春泥。</p>
            <p>乱花渐欲迷人眼，浅草才能没马蹄。</p>
            <p>最爱湖东行不足，绿杨阴里白沙堤。</p>
          </Panel>
          <Panel header="暮江吟" key="16" extra={'白居易'}>
            <p>一道残阳铺水中，半江瑟瑟半江红。</p>
            <p>可怜九月初三夜，露似真珠月似弓。</p>
          </Panel>
          <Panel header="酬乐天扬州初逢席上见赠" key="17" extra={'刘禹锡'}>
            <p>巴山楚水凄凉地，二十三年弃置身。</p>
            <p>怀旧空吟闻笛赋，到乡翻似烂柯人。</p>
            <p>沉舟侧畔千帆过，病树前头万木春。</p>
            <p>今日听君歌一曲，暂凭杯酒长精神。</p>
          </Panel>
          <Panel header="和张仆射塞下曲·其二" key="18" extra={'卢纶'}>
            <p>林暗草惊风，将军夜引弓。</p>
            <p>平明寻白羽，没在石棱中。</p>
          </Panel>
          <Panel header="不第后赋菊" key="19" extra={'黄巢'}>
            <p>待到秋来九月八，我花开后百花杀。</p>
            <p>冲天香阵透长安，满城尽带黄金甲。</p>
          </Panel>
          <Panel header="离思五首·其四" key="20" extra={'元稹'}>
            <p>曾经沧海难为水，除却巫山不是云。</p>
            <p>取次花丛懒回顾，半缘修道半缘君。</p>
          </Panel>
          <Panel header="梦微之" key="21" extra={'白居易'}>
            <p>夜来携手梦同游，晨起盈巾泪莫收。</p>
            <p>漳浦老身三度病，咸阳草树八回秋。</p>
            <p>君埋泉下泥销骨，我寄人间雪满头。</p>
            <p>阿卫韩郎相次去，夜台茫昧得知不。</p>
          </Panel>
          <Panel header="清平调" key="22" extra={'李白'}>
            <p>云想衣裳花想容，春风拂槛露华浓。</p>
            <p>若非群玉山头见，会向瑶台月下逢。</p>
          </Panel>
          <Panel header="赠去婢" key="23" extra={'崔郊'}>
            <p>公子王孙逐后尘，绿珠垂泪滴罗巾。</p>
            <p>侯门一入深如海，从此萧郎是路人。</p>
          </Panel>
          <Panel header="终南别业" key="24" extra={'王维'}>
            <p>中岁颇好道，晚家南山陲。</p>
            <p>兴来每独往，胜事空自知。</p>
            <p>行到水穷处，坐看云起时。</p>
            <p>偶然值林叟，谈笑无还期。</p>
          </Panel>
          <Panel header="夜泊牛渚怀古" key="25" extra={'李白'}>
            <p>牛渚西江夜，青天无片云。</p>
            <p>登舟望秋月，空忆谢将军。</p>
            <p>余亦能高咏，斯人不可闻。</p>
            <p>明朝挂帆席，枫叶落纷纷。</p>
          </Panel>
          <Panel header="金铜仙人辞汉歌" key="26" extra={'李贺'}>
            <p>茂陵刘郎秋风客，夜闻马嘶晓无迹。</p>
            <p>画栏桂树悬秋香，三十六宫土花碧。</p>
            <p>魏官牵车指千里，东关酸风射眸子。</p>
            <p>空将汉月出宫门，忆君清泪如铅水。</p>
            <p>衰兰送客咸阳道，天若有情天亦老。</p>
            <p>携盘独出月荒凉，渭城已远波声小。</p>
          </Panel>
          <Panel header="春夜洛城闻笛" key="27" extra={'李白'}>
            <p>谁家玉笛暗飞声，散入春风满洛城。</p>
            <p>此夜曲中闻折柳，何人不起故园情。</p>
          </Panel>
          <Panel header="早发白帝城" key="28" extra={'李白'}>
            <p>朝辞白帝彩云间，千里江陵一日还。</p>
            <p>两岸猿声啼不住，轻舟已过万重山。</p>
          </Panel>
          <Panel header="题乌江亭" key="29" extra={'杜牧'}>
            <p>胜败兵家事不期，包羞忍耻是男儿。</p>
            <p>江东子弟多才俊，卷土重来未可知。</p>
          </Panel>
          <Panel header="山行" key="30" extra={'杜牧'}>
            <p>远上寒山石径斜，白云生处有人家。</p>
            <p>停车坐爱枫林晚，霜叶红于二月花。</p>
          </Panel>
          <Panel header="凉州词二首·其二" key="31" extra={'王之涣'}>
            <p>黄河远上白云间，一片孤城万仞山。</p>
            <p>羌笛何须怨杨柳，春风不度玉门关。</p>
          </Panel>
          <Panel header="凉州词二首·其一" key="32" extra={'王翰'}>
            <p>葡萄美酒夜光杯，欲饮琵琶马上催。</p>
            <p>醉卧沙场君莫笑，古来征战几人回？</p>
          </Panel>
          <Panel header="出塞二首·其一" key="33" extra={'王昌龄'}>
            <p>秦时明月汉时关，万里长征人未还。</p>
            <p>但使龙城飞将在，不教胡马度阴山。</p>
          </Panel>
          <Panel header="过华清宫绝句三首·其一" key="34" extra={'杜牧'}>
            <p>长安回望绣成堆，山顶千门次第开。</p>
            <p>一骑红尘妃子笑，无人知是荔枝来。</p>
          </Panel>
          <Panel header="渡荆门送别" key="35" extra={'李白'}>
            <p>渡远荆门外，来从楚国游。</p>
            <p>山随平野尽，江入大荒流。</p>
            <p>月下飞天镜，云生结海楼。</p>
            <p>仍怜故乡水，万里送行舟。</p>
          </Panel>
          <Panel header="逢雪宿芙蓉山主人" key="36" extra={'刘长卿'}>
            <p>日暮苍山远，天寒白屋贫。</p>
            <p>柴门闻犬吠，风雪夜归人。</p>
          </Panel>
          <Panel header="节妇吟·寄东平李司空师道" key="37" extra={'张籍'}>
            <p>君知妾有夫，赠妾双明珠。</p>
            <p>感君缠绵意，系在红罗襦。</p>
            <p>妾家高楼连苑起，良人执戟明光里。</p>
            <p>知君用心如日月，事夫誓拟同生死。</p>
            <p>还君明珠双泪垂，恨不相逢未嫁时。</p>
          </Panel>
          <Panel header="锦瑟" key="38" extra={'李商隐'}>
            <p>锦瑟无端五十弦，一弦一柱思华年。</p>
            <p>庄生晓梦迷蝴蝶，望帝春心托杜鹃。</p>
            <p>沧海月明珠有泪，蓝田日暖玉生烟。</p>
            <p>此情可待成追忆？只是当时已惘然。</p>
          </Panel>
          <Panel header="别董大二首" key="39" extra={'高适'}>
            <p>千里黄云白日曛，北风吹雁雪纷纷。</p>
            <p>莫愁前路无知己，天下谁人不识君？</p>
          </Panel>
          <Panel header="闻乐天授江州司马" key="40" extra={'元稹'}>
            <p>残灯无焰影幢幢，此夕闻君谪九江。</p>
            <p>垂死病中惊坐起，暗风吹雨入寒窗。</p>
          </Panel>
          <Panel header="乌衣巷" key="41" extra={'刘禹锡'}>
            <p>朱雀桥边野草花，乌衣巷口夕阳斜。</p>
            <p>旧时王谢堂前燕，飞入寻常百姓家。</p>
          </Panel>
          <Panel header="闺怨" key="42" extra={'王昌龄'}>
            <p>闺中少妇不知愁，春日凝妆上翠楼。</p>
            <p>忽见陌头杨柳色，悔教夫婿觅封侯。</p>
          </Panel>
          <Panel header="江南逢李龟年" key="43" extra={'杜甫'}>
            <p>岐王宅里寻常见，崔九堂前几度闻。</p>
            <p>正是江南好风景，落花时节又逢君。</p>
          </Panel>
          <Panel header="赠妓云英" key="44" extra={'罗隐'}>
            <p>钟陵醉别十余春，重见云英掌上身。</p>
            <p>我未成名卿未嫁，可能俱是不如人。</p>
          </Panel>
          <Panel header="赏牡丹" key="45" extra={'刘禹锡'}>
            <p>庭前芍药妖无格，池上芙蕖净少情。</p>
            <p>唯有牡丹真国色，花开时节动京城。</p>
          </Panel>
          <Panel header="近试上张籍水部" key="46" extra={'朱庆馀yu'}>
            <p>洞房昨夜停红烛，待晓堂前拜舅姑。</p>
            <p>妆罢低声问夫婿，画眉深浅入时无。</p>
          </Panel>
          <Panel header="江陵愁望寄子安" key="47" extra={'鱼玄机'}>
            <p>枫叶千枝复万枝，江桥掩映暮帆迟。</p>
            <p>忆君心似西江水，日夜东流无歇时。</p>
          </Panel>
          <Panel header="闻王昌龄左迁龙标遥有此寄" key="48" extra={'李白'}>
            <p>杨花落尽子规啼，闻道龙标过五溪。</p>
            <p>我寄愁心与明月，随君直到夜郎西。</p>
          </Panel>
          <Panel header="左迁至蓝关示侄孙湘" key="49" extra={'韩愈'}>
            <p>一封朝奏九重天，夕贬潮州路八千。</p>
            <p>欲为圣明除弊事，肯将衰朽惜残年！</p>
            <p>云横秦岭家何在？雪拥蓝关马不前。</p>
            <p>知汝远来应有意，好收吾骨瘴江边。</p>
          </Panel>
          <Panel header="玄都观桃花" key="50" extra={'刘禹锡'}>
            <p>紫陌红尘拂面来，无人不道看花回。</p>
            <p>玄都观里桃千树，尽是刘郎去后栽。</p>
          </Panel>
          <Panel header="夜雨寄北" key="51" extra={'李商隐'}>
            <p>君问归期未有期，巴山夜雨涨秋池。</p>
            <p>何当共剪西窗烛，却话巴山夜雨时。</p>
          </Panel>
          <Panel header="问刘十九" key="52" extra={'白居易'}>
            <p>绿蚁新醅酒，红泥小火炉。</p>
            <p>晚来天欲雪，能饮一杯无？</p>
          </Panel>
          <Panel header="无题*春心莫共花争发" key="53" extra={'李商隐'}>
            <p>飒飒东风细雨来，芙蓉塘外有轻雷。</p>
            <p>金蟾啮锁烧香入，玉虎牵丝汲井回。</p>
            <p>贾氏窥帘韩掾少，宓妃留枕魏王才。</p>
            <p>春心莫共花争发，一寸相思一寸灰！</p>
          </Panel>
          <Panel header="逢入京使" key="54" extra={'岑参'}>
            <p>故园东望路漫漫，双袖龙钟泪不干。</p>
            <p>马上相逢无纸笔，凭君传语报平安。</p>
          </Panel>
          <Panel header="无题*直道相思了无益" key="55" extra={'李商隐'}>
            <p>重帏深下莫愁堂，卧后清宵细细长。</p>
            <p>神女生涯原是梦，小姑居处本无郎。</p>
            <p>风波不信菱枝弱，月露谁教桂叶香。</p>
            <p>直道相思了无益，未妨惆怅是清狂。</p>
          </Panel>
          <Panel header="寄蜀中薛涛校书" key="56" extra={'王建'}>
            <p>万里桥边女校书，枇杷花里闭门居。</p>
            <p>扫眉才子于今少，管领春风总不如。</p>
          </Panel>
          <Panel header="闻官军收河南河北" key="57" extra={'杜甫'}>
            <p>剑外忽传收蓟北，初闻涕泪满衣裳。</p>
            <p>却看妻子愁何在，漫卷诗书喜欲狂。</p>
            <p>白日放歌须纵酒，青春作伴好还乡。</p>
            <p>即从巴峡穿巫峡，便下襄阳向洛阳。</p>
          </Panel>
          <Panel header="咏怀古迹（其三）" key="58" extra={'杜甫'}>
            <p>群山万壑赴荆门，生长明妃尚有村。</p>
            <p>一去紫台连朔漠，独留青冢向黄昏。</p>
            <p>画图省识春风面，环珮空归夜月魂。</p>
            <p>千载琵琶作胡语，分明怨恨曲中论。</p>
          </Panel>
          <Panel header="送柴侍御" key="59" extra={'王昌龄'}>
            <p>流水通波接武冈，送君不觉有离伤。</p>
            <p>青山一道同云雨，明月何曾是两乡。</p>
          </Panel>
          <Panel header="把酒问月·故人贾淳令予问之" key="60" extra={'李白'}>
            <p>青天有月来几时，我今停杯一问之。</p>
            <p>人攀明月不可得，月行却与人相随。</p>
            <p>皎如飞镜临丹阙，绿烟灭尽清辉发。</p>
            <p>但见宵从海上来，宁知晓向云间没。</p>
            <p>白兔捣药秋复春，嫦娥孤栖与谁邻。</p>
            <p>今人不见古时月，今月曾经照古人。</p>
            <p>古人今人若流水，共看明月皆如此。</p>
            <p>唯愿当歌对酒时，月光长照金樽里。</p>
          </Panel>
          <Panel header="江畔独步寻花·其六" key="61" extra={'杜甫'}>
            <p>黄四娘家花满蹊，千朵万朵压枝低。</p>
            <p>留连戏蝶时时舞，自在娇莺恰恰啼。</p>
          </Panel>
          <Panel header="宫词·故国三千里" key="62" extra={'张祜'}>
            <p>故国三千里，深宫二十年。</p>
            <p>一声何满子，双泪落君前。</p>
          </Panel>
          <Panel header="咏怀古迹五首·其一" key="63" extra={'杜甫'}>
            <p>支离东北风尘际，漂泊西南天地间。</p>
            <p>三峡楼台淹日月，五溪衣服共云山。</p>
            <p>羯胡事主终无赖，词客哀时且未还。</p>
            <p>庾信平生最萧瑟，暮年诗赋动江关。</p>
          </Panel>
          <Panel header="笑傲江湖二之东方不败" key="64" extra={''}>
            <p>天下英雄出我辈，一入江湖岁月催。</p>
            <p>鸿图霸业谈笑间，不胜人生一场醉。</p>
            <p>提剑跨骑挥鬼雨，白骨如山鸟惊飞。</p>
            <p>尘世如潮人如水，只叹江湖几人回。</p>
          </Panel>
          <Panel header="x" key="65" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="66" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="67" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="68" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="69" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="70" extra={''}>
            <p></p>
            <p></p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
