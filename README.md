
# react-box


### 描述

一个轻量级的 React 设计组件库，专注于提供精致美观的信息展示小组件


### 安装

```shell
npm i --save @kne/react-box
```


### 概述

一个轻量级的 React 设计组件库，专注于提供精致美观的信息展示小组件。组件采用现代化 CSS 变量和 SCSS 模块化样式，支持灵活的定制和响应式布局。所有组件均遵循统一的命名规范，代码简洁易用，无需外部字体依赖。

目前提供七种常用展示组件：通用卡片组件、终端窗口组件、多彩卡片组件、毛玻璃卡片组件、弹性方块组件、结果展示组件和个人档案卡片组件，每种组件都经过精心设计，具有平滑的过渡动画和细腻的视觉效果，能够快速提升应用的界面质感。


### 示例(全屏)

#### 示例代码

- Card
- 通用卡片组件，支持标题、图标和操作区域
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { Card } = _ReactBox;
const { Flex, Space, Button } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={16}>
      <Card
        title="大尺寸卡片"
        icon="📊"
        size="large"
        extra={<a href="#">查看更多</a>}
      >
        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          大尺寸卡片，padding: 32px，标题更大
        </div>
      </Card>

      <Card
        title="默认尺寸卡片"
        icon="📊"
        extra={<a href="#">查看更多</a>}
      >
        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          这是卡片内容区域
        </div>
      </Card>

      <Card
        title="小尺寸卡片"
        icon="📊"
        size="small"
        extra={<a href="#">查看更多</a>}
      >
        <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          小尺寸卡片，padding: 16px，标题更小
        </div>
      </Card>

      <Card
        title="自定义样式"
        icon="🎨"
        padding="32px"
        radius="16px"
        style={{ borderLeft: '4px solid #741ce9' }}
      >
        <p style={{ margin: 0, color: '#475569' }}>
          通过 padding、radius 和 style 属性自定义卡片样式
        </p>
      </Card>

      <Card
        title="无边框卡片"
        icon="📄"
        border={false}
        padding="20px"
      >
        <p style={{ margin: 0, color: '#475569' }}>
          设置 border=false 可以移除边框，适用于需要自定义背景或嵌入其他容器的场景
        </p>
      </Card>

      <Card
        title="操作按钮"
        icon="⚙️"
        extra={
          <Space>
            <Button type="link" size="small">编辑</Button>
            <Button type="link" size="small">删除</Button>
          </Space>
        }
      >
        <p style={{ margin: 0, color: '#475569' }}>
          在 extra 区域放置操作按钮，实现卡片的交互功能
        </p>
      </Card>

      <Card
        title="图表卡片"
        icon="📈"
        size="large"
      >
        <div style={{ 
          height: '200px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#64748b'
        }}>
          图表展示区域
        </div>
      </Card>

      <Card title="简洁卡片" size="small">
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>
          这是一个简洁的卡片，只包含标题和内容区域。适用于不需要额外装饰的场景。
        </p>
      </Card>
    </Flex>
  );
};

render(<BaseExample />);

```

- Zsh
- 终端窗口组件，模拟 macOS 终端样式
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { Zsh } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={16}>
      <Zsh title="终端 — zsh">
        <div style={{ color: '#1f2937' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: '#22c55e', fontWeight: 'bold' }}>➜</span>
            <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>~</span>
            <span>npm init @kne/union-app my-dashboard</span>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#0052D9' }}>ℹ</span> 正在初始化 KNE Union 应用...
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', paddingLeft: '1.5rem' }}>v3.0.0</p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#22c55e' }}>✔</span> 模板已下载
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#22c55e' }}>✔</span> 依赖已解析
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#22c55e' }}>✔</span> 配置已生成
            </p>
          </div>
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '0.75rem', 
            backgroundColor: '#f0fdf4', 
            borderRadius: '8px', 
            border: '1px solid #dcfce7',
            color: '#15803d',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            <p style={{ margin: 0 }}>成功！项目已创建于 ./my-dashboard</p>
          </div>
        </div>
      </Zsh>

      <Zsh title="终端 — bash" padding="24px" radius="8px">
        <div style={{ color: '#1f2937' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: '#22c55e', fontWeight: 'bold' }}>$</span>
            <span>ls -la</span>
          </div>
          <div style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
            <p>total 48</p>
            <p>drwxr-xr-x  12 user  staff   384 Mar  3 10:30 .</p>
            <p>drwxr-xr-x   6 user  staff   192 Mar  3 09:15 ..</p>
            <p>-rw-r--r--   1 user  staff  1024 Mar  3 10:30 README.md</p>
          </div>
        </div>
      </Zsh>
    </Flex>
  );
};

render(<BaseExample />);

```

- ColorfulCard
- 多彩渐变卡片组件，支持多种预设颜色和自定义样式
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),icons(@ant-design/icons),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { ColorfulCard } = _ReactBox;
const { Flex, Badge } = antd;
const {
  BgColorsOutlined,
  FireOutlined,
  HeartOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  StarOutlined,
  TrophyOutlined,
  MoonOutlined,
  BorderOutlined,
  RocketOutlined,
  ApiOutlined,
  ExperimentOutlined,
  HighlightOutlined
} = icons;

const BaseExample = () => {
  return (
    <Flex vertical gap={32} style={{ padding: '40px', backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0, color: '#1e293b' }}>
        ColorfulCard 多彩卡片组件
      </h2>

      <section>
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#334155' }}>
          预设颜色
        </h3>
        <Flex gap={16} wrap>
          <ColorfulCard
            color={ColorfulCard.Purple}
            icon={<BgColorsOutlined />}
            title="Purple"
            description={ColorfulCard.Purple}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Orange}
            icon={<FireOutlined />}
            title="Orange"
            description={ColorfulCard.Orange}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Blue}
            icon={<ApiOutlined />}
            title="Blue"
            description={ColorfulCard.Blue}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Pink}
            icon={<HeartOutlined />}
            title="Pink"
            description={ColorfulCard.Pink}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Green}
            icon={<BulbOutlined />}
            title="Green"
            description={ColorfulCard.Green}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Yellow}
            icon={<ThunderboltOutlined />}
            title="Yellow"
            description={ColorfulCard.Yellow}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Red}
            icon={<TrophyOutlined />}
            title="Red"
            description={ColorfulCard.Red}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Gray}
            icon={<MoonOutlined />}
            title="Gray"
            description={ColorfulCard.Gray}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Black}
            icon={<BorderOutlined />}
            title="Black"
            description={ColorfulCard.Black}
            style={{ width: '200px' }}
          />
        </Flex>
      </section>

      <section>
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#334155' }}>
          不同圆角
        </h3>
        <Flex gap={16} align="center">
          <ColorfulCard
            color={ColorfulCard.Purple}
            icon={<BgColorsOutlined />}
            title="圆角 8px"
            description="小圆角风格"
            radius="8px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Blue}
            icon={<ApiOutlined />}
            title="圆角 12px"
            description="中等圆角风格"
            radius="12px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Green}
            icon={<BulbOutlined />}
            title="圆角 16px"
            description="较大圆角风格"
            radius="16px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Orange}
            icon={<FireOutlined />}
            title="圆角 24px"
            description="大圆角风格"
            radius="24px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Pink}
            icon={<HeartOutlined />}
            title="圆角 32px"
            description="超大圆角风格"
            radius="32px"
            style={{ width: '180px' }}
          />
        </Flex>
      </section>

      <section>
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#334155' }}>
          内容展示 - 参考标准化卡片样式
        </h3>
        <ColorfulCard
          color={ColorfulCard.Purple}
          icon={<RocketOutlined />}
          title="ColorfulCard"
          description="多彩渐变卡片组件，支持多种预设颜色和自定义样式，适用于现代化的 UI 设计场景。"
          radius="40px"
          padding="48px"
        >
          <Flex gap={12}>
            <Badge color="rgba(147,51,234,0.15)" text="React" style={{ color: '#9333ea', fontSize: '12px' }} />
            <Badge color="rgba(147,51,234,0.15)" text="组件" style={{ color: '#9333ea', fontSize: '12px' }} />
            <Badge color="rgba(147,51,234,0.15)" text="SCSS" style={{ color: '#9333ea', fontSize: '12px' }} />
          </Flex>
        </ColorfulCard>
      </section>

      <section>
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#334155' }}>
          自定义颜色
        </h3>
        <Flex gap={16} align="center">
          <ColorfulCard
            color="#6366f1"
            icon={<StarOutlined />}
            title="Indigo"
            description="靛蓝色主题"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color="#8b5cf6"
            icon={<ExperimentOutlined />}
            title="Violet"
            description="紫罗兰主题"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color="#ec4899"
            icon={<HighlightOutlined />}
            title="Rose"
            description="玫瑰色主题"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color="#14b8a6"
            icon={<BulbOutlined />}
            title="Teal"
            description="蓝绿色主题"
            style={{ width: '180px' }}
          />
        </Flex>
      </section>
    </Flex>
  );
};

render(<BaseExample />);

```

- GlassCard
- 毛玻璃效果卡片组件
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { GlassCard } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={24} style={{ padding: '40px', alignItems: 'center', backgroundColor: '#e0e7ff' }}>
      <h3>不同圆角</h3>
      <Flex gap={16} align="center">
        <GlassCard radius="8px" style={{ width: '200px', height: '120px', padding: '16px' }}>
          圆角 8px
        </GlassCard>
        <GlassCard radius="12px" style={{ width: '200px', height: '120px', padding: '16px' }}>
          圆角 12px
        </GlassCard>
        <GlassCard radius="16px" style={{ width: '200px', height: '120px', padding: '16px' }}>
          圆角 16px
        </GlassCard>
        <GlassCard radius="24px" style={{ width: '200px', height: '120px', padding: '16px' }}>
          圆角 24px
        </GlassCard>
      </Flex>

      <h3>不同尺寸</h3>
      <Flex gap={16} align="center">
        <GlassCard style={{ width: '150px', height: '100px', padding: '16px' }}>
          小尺寸
        </GlassCard>
        <GlassCard style={{ width: '200px', height: '120px', padding: '16px' }}>
          中尺寸
        </GlassCard>
        <GlassCard style={{ width: '250px', height: '140px', padding: '16px' }}>
          大尺寸
        </GlassCard>
      </Flex>

      <h3>内容展示</h3>
      <GlassCard style={{ width: '300px', padding: '20px' }}>
        <div style={{ marginBottom: '12px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontWeight: 600 }}>毛玻璃效果卡片</h4>
          <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>
            这是一个使用 CSS backdrop-filter 实现毛玻璃效果的卡片组件，
            支持自定义圆角大小，适用于各种现代化的 UI 设计场景。
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ padding: '4px 12px', background: 'rgba(37,99,235,0.1)', color: '#2563eb', borderRadius: '4px', fontSize: '12px' }}>
            React
          </span>
          <span style={{ padding: '4px 12px', background: 'rgba(34,197,94,0.1)', color: '#22c55e', borderRadius: '4px', fontSize: '12px' }}>
            组件
          </span>
        </div>
      </GlassCard>
    </Flex>
  );
};

render(<BaseExample />);

```

- Jelly
- Jelly 弹性方块组件
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { Jelly } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={24} style={{ padding: '40px', alignItems: 'center' }}>
      <h3>不同颜色</h3>
      <Flex gap={16} wrap="wrap">
        <Jelly color={Jelly.Purple} />
        <Jelly color={Jelly.Orange} />
        <Jelly color={Jelly.Blue} />
        <Jelly color={Jelly.Pink} />
        <Jelly color={Jelly.Green} />
        <Jelly color={Jelly.Yellow} />
        <Jelly color={Jelly.Red} />
        <Jelly color={Jelly.Gray} />
        <Jelly color={Jelly.Black} />
      </Flex>

      <h3>不同尺寸</h3>
      <Flex gap={16} align="center">
        <Jelly size="40px" color={Jelly.Purple} />
        <Jelly size="60px" color={Jelly.Blue} />
        <Jelly size="80px" color={Jelly.Green} />
        <Jelly size="100px" color={Jelly.Orange} />
      </Flex>

      <h3>不同宽度</h3>
      <Flex vertical gap={16} align="center">
        <Jelly width="100px" color={Jelly.Pink} />
        <Jelly width="200px" color={Jelly.Red} />
        <Jelly width="300px" color={Jelly.Yellow} />
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);

```

- Result
- 结果展示组件，内置成功、警告、失败、信息四种快捷状态
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),icons(@ant-design/icons),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { Result } = _ReactBox;
const { Flex, Button } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={48} style={{ padding: '24px 0' }}>
      <Result.Success title="操作成功" description="数据已保存，您可以继续下一步操作。">
        <Button type="primary" size="large" shape="round">
          查看详情
        </Button>
      </Result.Success>

      <Flex wrap gap={32} justify="center">
        <Result.Warning title="注意风险" description="当前配置尚未完全生效，请确认后再提交。" />
        <Result.Error title="提交失败" description="网络请求超时，请稍后重试。" />
        <Result.Info title="提示信息" description="您可以先完成基础设置，再进行高级配置。" />
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);

```

- PersonalCard
- 个人档案卡片组件 - 在一个示例中演示三种模式、状态切换与空值处理
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { PersonalCard } = _ReactBox;
const { Flex, Select, Segmented, Tag } = antd;
const { useMemo, useState } = React;

const avatar =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA';

const modeOptions = [
  { label: '大模式', value: 'large' },
  { label: '纵向模式', value: 'vertical' },
  { label: '横向模式', value: 'horizontal' }
];

const statusOptions = [
  { label: '在线', value: 'online' },
  { label: '离线', value: 'offline' },
  { label: '忙碌', value: 'busy' }
];

const BaseExample = () => {
  const [mode, setMode] = useState('large');
  const [status, setStatus] = useState('online');

  const profileCards = useMemo(
    () => [
      {
        key: 'full',
        label: '完整信息',
        badge: '推荐',
        name: '莎拉·詹金斯',
        title: '高级账户战略师',
        description: '我的使命是确保您的团队拥有轻松扩展所需的资源和战略指导。让我们携手共创辉煌。',
        phone: '+86 138 0000 0000',
        email: 'sarah.j@example.com',
        moreInfo: [
          { label: '性别', content: '女' },
          { label: '年龄', content: '32' },
          { label: '部门', content: '账户管理' },
          { label: '职位', content: '高级账户战略师' }
        ]
      },
      {
        key: 'email-only',
        label: '仅邮箱',
        badge: '候选',
        name: '林知夏',
        title: '产品经理',
        description: '负责产品规划与用户体验优化，擅长把复杂问题转化为清晰方案。',
        email: 'linzhixia@example.com',
        moreInfo: [
          { label: '性别', content: '女' },
          { label: '年龄', content: '29' },
          { label: '部门', content: '产品部' },
          { label: '专长', content: '增长策略' }
        ]
      },
      {
        key: 'empty-contact',
        label: '无联系方式',
        badge: '归档',
        name: '周予安',
        title: '数据分析师',
        description: '关注业务指标体系建设与可视化分析，强调用数据驱动决策。',
        moreInfo: [
          { label: '性别', content: '男' },
          { label: '年龄', content: '31' },
          { label: '部门', content: '数据中心' },
          { label: '专长', content: '经营分析' }
        ]
      }
    ],
    []
  );

  return (
    <Flex vertical gap={32} style={{ padding: '40px' }}>
      <Flex vertical gap={16}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>综合示例</div>
        <Flex wrap gap={16} align="center" justify="space-between">
          <Flex gap={12} align="center" wrap="wrap">
            <span>mode：</span>
            <Segmented value={mode} onChange={setMode} options={modeOptions} />
          </Flex>
          <Flex gap={12} align="center" wrap="wrap">
            <span>status：</span>
            <Select value={status} onChange={setStatus} style={{ width: 120 }} options={statusOptions} />
          </Flex>
        </Flex>
      </Flex>

      <Flex wrap gap={24} justify="center">
        {profileCards.map(item => (
          <div key={item.key} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <Tag color="blue">{item.label}</Tag>
            <PersonalCard avatar={avatar} mode={mode} status={status} {...item} />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);

```

- HeaderCard
- 头部卡片组件 - 展示多种主题色效果
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { HeaderCard } = _ReactBox;
const { Input, Space, Tag, Button, Flex, Slider } = antd;
const { Search } = Input;

const BaseExample = () => {
  return (
    <Flex vertical gap={48}>
      {/* 基础示例 - 展示所有API */}
      <HeaderCard
        color="#2563eb"
        subtitle={
          <>
            <Tag color="processing" style={{ marginInlineEnd: 0 }}>
              资源目录
            </Tag>
            HeaderCard
          </>
        }
        title="组件与远程模块目录"
        description="统一承载目录检索、分类筛选与说明文案，适用于组件市场、文档首页与资源聚合等场景。"
        footer={
          <Space size={8}>
            <Button type="primary" size="small">
              新建资源
            </Button>
            <Button size="small">查看接入规范</Button>
          </Space>
        }
        icon={
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 24,
              border: '1px solid rgba(37, 99, 235, 0.2)',
              background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0.04) 100%)',
              clipPath: 'polygon(25% 6%, 75% 6%, 96% 50%, 75% 94%, 25% 94%, 4% 50%)'
            }}
          />
        }
      >
        <Search allowClear enterButton="搜索" size="large" placeholder="搜索组件 / 模块 / 关键字" />
      </HeaderCard>

      {/* icon 位置和大小的控制 */}
      <div>
        <h3 style={{ marginBottom: 24, fontSize: 18, fontWeight: 600 }}>icon 位置和大小控制</h3>
        <Flex vertical gap={36}>
          <HeaderCard
            color="#8b5cf6"
            subtitle="iconPosition: right-top"
            title="图标位置：右上角"
            description="通过 iconPosition 参数可以控制图标的位置"
            iconPosition="right-top"
            iconSize={72}
            icon={
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ width: 24, height: 24, background: '#8b5cf6', borderRadius: 6, transform: 'rotate(45deg)' }} />
              </div>
            }
          />

          <HeaderCard
            color="#06b6d4"
            subtitle="iconPosition: left-bottom"
            title="图标位置：左下角"
            description="支持四个位置：right-bottom（默认）、right-top、left-bottom、left-top"
            iconPosition="left-bottom"
            iconSize={80}
            icon={
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ width: 28, height: 28, border: '3px solid #06b6d4', borderRadius: '50%' }} />
              </div>
            }
          />

          <HeaderCard
            color="#ec4899"
            subtitle="iconPosition: left-top"
            title="图标位置：左上角"
            description="iconSize 支持数字（px）或字符串"
            iconPosition="left-top"
            iconSize="64px"
            icon={
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ width: 20, height: 20, background: '#ec4899', borderRadius: '50%' }} />
              </div>
            }
          />

          <HeaderCard
            color="#10b981"
            subtitle="iconSize: 120"
            title="大图标示例"
            description="通过 iconSize 参数可以控制图标容器的大小"
            iconPosition="right-bottom"
            iconSize={120}
            icon={
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 24,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ width: 40, height: 40, background: '#10b981', borderRadius: 12, transform: 'rotate(45deg)' }} />
              </div>
            }
          />
        </Flex>
      </div>

      {/* 多种颜色展示 */}
      <div>
        <h3 style={{ marginBottom: 24, fontSize: 18, fontWeight: 600 }}>多种主题色</h3>
        <Flex vertical gap={36}>
          {[
            { color: HeaderCard.Purple, name: 'Purple' },
            { color: HeaderCard.Green, name: 'Green' },
            { color: HeaderCard.Orange, name: 'Orange' },
            { color: HeaderCard.Pink, name: 'Pink' },
            { color: HeaderCard.Red, name: 'Red' }
          ].map(({ color, name }) => (
            <HeaderCard
              key={name}
              color={color}
              subtitle={`${name} 主题`}
              title={`${name} HeaderCard`}
              description="这是一个支持主题色的头部卡片组件，可以根据传入的颜色自动计算衍生颜色，生成协调的视觉效果。"
              footer={
                <Flex justify="space-between" align="center">
                  <Tag color={color}>自动配色</Tag>
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>支持自定义颜色值</span>
                </Flex>
              }
              icon={
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: color }} />
                </div>
              }
            />
          ))}
        </Flex>
      </div>

      {/* 自定义样式 */}
      <div>
        <h3 style={{ marginBottom: 24, fontSize: 18, fontWeight: 600 }}>自定义样式</h3>
        <HeaderCard
          color="#8b5cf6"
          subtitle="自定义样式"
          title="支持 style 和 className"
          description="可以通过 style 和 contentStyle 属性自定义卡片样式"
          style={{ borderRadius: 24 }}
          contentStyle={{ padding: 32 }}
          footer={
            <Space>
              <Button type="primary" size="small" style={{ background: '#8b5cf6', borderColor: '#8b5cf6' }}>
                立即使用
              </Button>
            </Space>
          }
          icon={
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ width: 24, height: 24, background: '#8b5cf6', borderRadius: 6, transform: 'rotate(45deg)' }} />
            </div>
          }
        >
          <Slider defaultValue={30} style={{ width: 300 }} />
        </HeaderCard>
      </div>

      {/* content 参数示例 */}
      <div>
        <h3 style={{ marginBottom: 24, fontSize: 18, fontWeight: 600 }}>content 参数 - description 下方的额外内容</h3>
        <Flex vertical gap={36}>
          <HeaderCard
            color="#06b6d4"
            subtitle="content 参数"
            title="在 description 下方添加内容"
            description="通过 content 参数可以在描述文字下方添加自定义内容，适合放置标签、状态等信息"
            content={
              <Flex gap={8} wrap="wrap">
                <Tag color="cyan">React</Tag>
                <Tag color="geekblue">TypeScript</Tag>
                <Tag color="purple">Ant Design</Tag>
                <Tag color="magenta">现代前端</Tag>
              </Flex>
            }
            footer={
              <Space>
                <Button type="primary" size="small">了解更多</Button>
              </Space>
            }
            icon={
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ width: 28, height: 28, border: '3px solid #06b6d4', borderRadius: '50%' }} />
              </div>
            }
          />

          <HeaderCard
            color="#ec4899"
            subtitle="content 参数"
            title="展示统计数据"
            description="可以在 content 中放置统计信息"
            content={
              <Flex gap={24} style={{ marginTop: 12 }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#ec4899' }}>1,234</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>总访问量</div>
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#ec4899' }}>567</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>活跃用户</div>
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#ec4899' }}>89%</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>完成率</div>
                </div>
              </Flex>
            }
            icon={
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ width: 20, height: 20, background: '#ec4899', borderRadius: '50%' }} />
              </div>
            }
          />
        </Flex>
      </div>
    </Flex>
  );
};

render(<BaseExample />);

```

- AuroraCard
- 极光流光激活容器组件
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),icons(@ant-design/icons),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { AuroraCard } = _ReactBox;
const { Flex, Button, Space, Tag, Switch, Slider, Segmented } = antd;
const { useMemo, useState } = React;
const { RobotOutlined, AudioOutlined, ThunderboltOutlined, BulbOutlined } = icons;

const themeOptions = [
  { label: '默认', value: 'default' },
  { label: 'Ocean', value: 'ocean' },
  { label: 'Sunset', value: 'sunset' }
];

const variantOptions = [
  { label: '乳光', value: 'soft' },
  { label: '流光', value: 'vivid' }
];

const BaseExample = () => {
  const [animated, setAnimated] = useState(true);
  const [radius, setRadius] = useState(32);
  const [glow, setGlow] = useState(1);
  const [flowSpeed, setFlowSpeed] = useState(1);
  const [variant, setVariant] = useState('soft');
  const [theme, setTheme] = useState('default');

  const themeStyle = useMemo(() => {
    const themes = {
      default: {
        color: AuroraCard.Blue,
        secondaryColor: AuroraCard.Purple,
        accentColor: AuroraCard.Pink
      },
      ocean: {
        color: '#38bdf8',
        secondaryColor: '#6366f1',
        accentColor: '#2dd4bf'
      },
      sunset: {
        color: '#fb7185',
        secondaryColor: '#f97316',
        accentColor: '#f59e0b'
      }
    };

    return themes[theme];
  }, [theme]);

  return (
    <Flex vertical gap={32} style={{ padding: '24px 0' }}>
      <Flex wrap gap={16} align="center" justify="space-between">
        <Flex gap={12} align="center" wrap="wrap">
          <span>主题：</span>
          <Segmented value={theme} onChange={setTheme} options={themeOptions} />
          <span>风格：</span>
          <Segmented value={variant} onChange={setVariant} options={variantOptions} />
        </Flex>
        <Flex gap={16} align="center" wrap="wrap">
          <span>动画：</span>
          <Switch checked={animated} onChange={setAnimated} />
          <span>圆角：</span>
          <div style={{ width: 160 }}>
            <Slider min={20} max={44} value={radius} onChange={setRadius} />
          </div>
          <span>光晕：</span>
          <div style={{ width: 160 }}>
            <Slider min={0.4} max={1.6} step={0.1} value={glow} onChange={setGlow} />
          </div>
          <span>流速：</span>
          <div style={{ width: 160 }}>
            <Slider min={0.4} max={2.4} step={0.1} value={flowSpeed} onChange={setFlowSpeed} />
          </div>
        </Flex>
      </Flex>

      <AuroraCard animated={animated} radius={radius} glow={glow} flowSpeed={flowSpeed} variant={variant} minHeight={280} style={{ maxWidth: 760, margin: '0 auto' }} {...themeStyle}>
        <Flex vertical gap={20} justify="center" style={{ minHeight: 224 }}>
          <Space wrap>
            <Tag color="processing">Aurora Glow</Tag>
            <Tag color="purple">Active</Tag>
          </Space>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.03em' }}>你的智能能力已就绪</div>
          <div style={{ maxWidth: 560, color: 'rgba(15,23,42,0.72)', lineHeight: 1.8 }}>
            用流动彩边、呼吸光晕与玻璃质感，营造沉浸式激活视觉效果，适合 AI 对话入口、语音面板或欢迎区。
          </div>
          <Space wrap size={12}>
            <Button type="primary" icon={<RobotOutlined />}>
              开始对话
            </Button>
            <Button icon={<AudioOutlined />}>
              语音唤醒
            </Button>
          </Space>
        </Flex>
      </AuroraCard>

      <Flex wrap gap={24} justify="center">
        <AuroraCard width={320} minHeight={168} padding={20} radius={28} flowSpeed={1.4} variant="soft" {...themeStyle}>
          <Flex vertical gap={10} justify="center" style={{ minHeight: 124, color: '#0f172a' }}>
            <AudioOutlined style={{ fontSize: 28 }} />
            <div style={{ fontSize: 22, fontWeight: 600 }}>语音待命</div>
            <div style={{ color: 'rgba(15,23,42,0.68)' }}>适合语音助手入口或悬浮模块</div>
          </Flex>
        </AuroraCard>

        <AuroraCard width={320} minHeight={168} padding={20} radius={28} flowSpeed={0.8} variant="vivid" color="#2dd4bf" secondaryColor="#38bdf8" accentColor="#a78bfa">
          <Flex vertical gap={10} justify="center" style={{ minHeight: 124, color: '#0f172a' }}>
            <BulbOutlined style={{ fontSize: 28 }} />
            <div style={{ fontSize: 22, fontWeight: 600 }}>智能建议</div>
            <div style={{ color: 'rgba(15,23,42,0.68)' }}>用于推荐卡、洞察提示或助手摘要</div>
          </Flex>
        </AuroraCard>

        <AuroraCard width={320} minHeight={168} padding={20} radius={999} flowSpeed={1.8} variant="vivid" color="#f472b6" secondaryColor="#a78bfa" accentColor="#60a5fa">
          <Flex vertical gap={10} justify="center" style={{ minHeight: 124, color: '#0f172a', textAlign: 'center' }}>
            <ThunderboltOutlined style={{ fontSize: 28 }} />
            <div style={{ fontSize: 22, fontWeight: 600 }}>快速激活</div>
            <div style={{ color: 'rgba(15,23,42,0.68)' }}>可做按钮强化态或激活态反馈</div>
          </Flex>
        </AuroraCard>
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);

```

- StackCard
- 层叠卡片容器组件，可包裹其他 Card 类组件并控制层叠数量
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { StackCard, Card, HeaderCard } = _ReactBox;
const { Flex, Slider, Space, Tag, Button, Select, Divider } = antd;
const { useState } = React;

const AUTO_LAYER_COLOR = '__auto__';

const BaseExample = () => {
  const [layers, setLayers] = useState(4);
  const [offset, setOffset] = useState(14);
  const [radius, setRadius] = useState(16);
  const [opacityStep, setOpacityStep] = useState(0.12);
  const [minLayerOpacity, setMinLayerOpacity] = useState(0.35);
  const [offsetDirection, setOffsetDirection] = useState('right-bottom');
  const [layerColor, setLayerColor] = useState(AUTO_LAYER_COLOR);

  return (
    <Flex vertical gap={36}>
      <Card title="交互式配置" icon="🧪" size="small">
        <Flex vertical gap={18}>
          <Flex align="center" justify="space-between" gap={16}>
            <span>layers（层数）</span>
            <div style={{ width: 260 }}>
              <Slider min={0} max={8} value={layers} onChange={setLayers} />
            </div>
          </Flex>

          <Flex align="center" justify="space-between" gap={16}>
            <span>offset（偏移）</span>
            <div style={{ width: 260 }}>
              <Slider min={0} max={28} value={offset} onChange={setOffset} />
            </div>
          </Flex>

          <Flex align="center" justify="space-between" gap={16}>
            <span>radius（圆角）</span>
            <div style={{ width: 260 }}>
              <Slider min={0} max={30} value={radius} onChange={setRadius} />
            </div>
          </Flex>

          <Flex align="center" justify="space-between" gap={16}>
            <span>opacityStep（透明递减）</span>
            <div style={{ width: 260 }}>
              <Slider min={0} max={0.3} step={0.01} value={opacityStep} onChange={setOpacityStep} />
            </div>
          </Flex>

          <Flex align="center" justify="space-between" gap={16}>
            <span>minLayerOpacity（最小透明）</span>
            <div style={{ width: 260 }}>
              <Slider min={0} max={1} step={0.01} value={minLayerOpacity} onChange={setMinLayerOpacity} />
            </div>
          </Flex>

          <Flex align="center" justify="space-between" gap={16}>
            <span>offsetDirection（方向）</span>
            <Select
              value={offsetDirection}
              style={{ width: 260 }}
              onChange={setOffsetDirection}
              options={[
                { label: 'right-bottom', value: 'right-bottom' },
                { label: 'right-top', value: 'right-top' },
                { label: 'left-bottom', value: 'left-bottom' },
                { label: 'left-top', value: 'left-top' }
              ]}
            />
          </Flex>

          <Flex align="center" justify="space-between" gap={16}>
            <span>layerColor（背景色）</span>
            <Select
              value={layerColor}
              style={{ width: 260 }}
              onChange={setLayerColor}
              options={[
                { label: 'Auto（复制子卡片）', value: AUTO_LAYER_COLOR },
                { label: 'White', value: '#ffffff' },
                { label: 'Blue', value: '#dbeafe' },
                { label: 'Purple', value: '#ede9fe' },
                { label: 'Green', value: '#dcfce7' },
                { label: 'Orange', value: '#ffedd5' }
              ]}
            />
          </Flex>
        </Flex>
      </Card>

      <StackCard
        layers={layers}
        offset={offset}
        radius={radius}
        opacityStep={opacityStep}
        minLayerOpacity={minLayerOpacity}
        offsetDirection={offsetDirection}
        layerColor={layerColor === AUTO_LAYER_COLOR ? undefined : layerColor}
      >
        <HeaderCard
          color={HeaderCard.Blue}
          style={{ borderRadius: radius }}
          subtitle="StackCard Playground"
          title="层叠效果完整能力演示"
          description="可配置层数、偏移、偏移方向、圆角、透明度递减强度与最小透明度。默认会复制子卡片的背景与圆角。"
          content={
            <Space wrap>
              <Tag color="processing">layers: {layers}</Tag>
              <Tag color="purple">offset: {offset}px</Tag>
              <Tag color="cyan">direction: {offsetDirection}</Tag>
              <Tag color="magenta">bg: {layerColor === AUTO_LAYER_COLOR ? 'auto' : layerColor}</Tag>
              <Tag color="geekblue">opacityStep: {opacityStep}</Tag>
              <Tag color="gold">minOpacity: {minLayerOpacity}</Tag>
            </Space>
          }
          footer={
            <Space>
              <Button type="primary" size="small">应用配置</Button>
              <Button size="small">重置</Button>
            </Space>
          }
        />
      </StackCard>

      <Divider style={{ margin: 0 }} />

      <Flex vertical gap={20}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>样式能力展示</div>
        <StackCard
          layers={3}
          offset={12}
          offsetDirection="right-bottom"
          radius={18}
          layerBackground="linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
          layerBorderColor="rgba(37, 99, 235, 0.22)"
          layerShadow="0 10px 28px rgba(37, 99, 235, 0.12)"
          opacityStep={0.16}
          minLayerOpacity={0.28}
        >
          <Card title="自定义层样式" icon="🎨" extra={<Tag color="blue">style</Tag>}>
            <div style={{ color: '#475569', lineHeight: 1.7 }}>
              通过 layerBackground、layerColor、layerBorderColor、layerShadow、radius 等参数可定义背后层叠风格。
            </div>
          </Card>
        </StackCard>
      </Flex>

      <Divider style={{ margin: 0 }} />

      <Flex vertical gap={20}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>自动继承子卡片样式</div>
        <StackCard layers={3} offset={12} offsetDirection="right-bottom">
          <Card
            title="自动读取背景和边框"
            icon="🪄"
            style={{
              background: 'linear-gradient(180deg, #fff7ed 0%, #ffedd5 100%)',
              border: '1px solid #fdba74'
            }}
          >
            <div style={{ color: '#9a3412', lineHeight: 1.7 }}>
              未传入 `layerBackground`、`layerColor`、`layerBorderColor` 时，会尝试从单个子节点的 style 中读取背景和边框。
            </div>
          </Card>
        </StackCard>
      </Flex>

      <Divider style={{ margin: 0 }} />

      <Flex vertical gap={16}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>方向能力展示</div>
        <Flex wrap gap={24}>
          {['right-bottom', 'right-top', 'left-bottom', 'left-top'].map(direction => (
            <div key={direction} style={{ width: 'calc(50% - 12px)', minWidth: 320 }}>
              <div style={{ marginBottom: 10, color: '#64748b', fontSize: 13 }}>{direction}</div>
              <StackCard layers={3} offset={10} offsetDirection={direction} opacityStep={0.14} minLayerOpacity={0.32}>
                <Card title="方向示例" size="small">
                  <div style={{ color: '#64748b' }}>offsetDirection = {direction}</div>
                </Card>
              </StackCard>
            </div>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);

```


### API

### Card

通用卡片组件，支持标题、图标和操作区域，适用于展示图表、统计数据等内容。

#### 属性

| 属性        | 类型        | 默认值       | 描述                                             |
|-----------|-----------|-----------|------------------------------------------------|
| className | string    | -         | 自定义类名                                          |
| title     | ReactNode | -         | 卡片标题                                           |
| icon      | ReactNode | -         | 标题图标，通常为 emoji 或图标组件                           |
| extra     | ReactNode | -         | 标题栏右侧的额外内容，可放置操作按钮等                            |
| children  | ReactNode | -         | 卡片主体内容                                         |
| size      | string    | 'default' | 卡片尺寸，可选值：'large' \| 'default' \| 'small'       |
| padding   | string    | -         | 内边距，会覆盖 size 的默认值（通过 CSS 变量 --card-padding 控制） |
| radius    | string    | '12px'    | 圆角大小（通过 CSS 变量 --card-radius 控制）               |
| border    | boolean   | true      | 是否显示边框                                         |
| style     | object    | -         | 自定义样式对象                                        |

### Zsh

终端窗口组件，模拟 macOS 终端样式，支持自定义标题和内容。

#### 属性

| 属性        | 类型        | 默认值        | 描述                              |
|-----------|-----------|------------|---------------------------------|
| className | string    | -          | 自定义类名                           |
| title     | string    | '终端 — zsh' | 终端标题                            |
| children  | ReactNode | -          | 终端内容                            |
| padding   | string    | '32px'     | 内边距（通过 CSS 变量 --zsh-padding 控制） |
| radius    | string    | '12px'     | 圆角大小（通过 CSS 变量 --zsh-radius 控制） |
| border    | boolean   | true       | 是否显示边框                          |
| style     | object    | -          | 自定义样式对象                         |

### ColorfulCard

多彩渐变卡片组件，支持多种预设颜色和自定义样式，具有精美的光晕效果和平滑的悬停动画。

#### 属性

| 属性          | 类型        | 默认值                 | 描述                   |
|-------------|-----------|---------------------|----------------------|
| className   | string    | -                   | 自定义类名                |
| color       | string    | ColorfulCard.Purple | 主题颜色，支持预设颜色或自定义颜色值   |
| radius      | string    | '12px'              | 圆角大小                 |
| padding     | string    | '24px'              | 内边距                  |
| style       | object    | -                   | 自定义样式对象              |
| icon        | ReactNode | -                   | 图标元素，通常为 emoji 或图标组件 |
| title       | ReactNode | -                   | 卡片标题                 |
| description | ReactNode | -                   | 卡片描述文字               |
| children    | ReactNode | -                   | 卡片底部内容区域（可添加按钮、标签等）  |

### GlassCard

毛玻璃效果卡片组件，使用 CSS backdrop-filter 实现透明模糊效果。

#### 属性

| 属性        | 类型     | 默认值    | 描述    |
|-----------|--------|--------|-------|
| className | string | -      | 自定义类名 |
| radius    | string | '12px' | 圆角大小  |

### Jelly

弹性方块组件，支持自定义颜色、尺寸和圆角，提供多种预设配色。

#### 属性

| 属性           | 类型     | 默认值          | 描述               |
|--------------|--------|--------------|------------------|
| className    | string | -            | 自定义类名            |
| size         | string | '60px'       | 方块尺寸             |
| width        | string | -            | 方块宽度（优先级高于 size） |
| borderRadius | string | '18px'       | 圆角大小             |
| color        | string | Jelly.Purple | 主题颜色             |

### Result

结果展示组件，用于显示操作结果、状态提示等信息，支持自定义图标和颜色。

#### 属性

| 属性          | 类型        | 默认值       | 描述       |
|-------------|-----------|-----------|----------|
| className   | string    | -         | 自定义类名    |
| title       | ReactNode | -         | 标题       |
| icon        | ReactNode | -         | 图标       |
| description | ReactNode | -         | 描述文字     |
| color       | string    | '#10b981' | 主题颜色     |
| children    | ReactNode | -         | 底部操作区域内容 |

#### 快捷组件

`Result` 提供以下常用状态快捷组件，均支持与 `Result` 相同的属性，并内置默认图标与主题色：

- `Result.Success`
- `Result.Warning`
- `Result.Error`
- `Result.Info`

同时也提供顶层导出：

- `SuccessResult`
- `WarningResult`
- `ErrorResult`
- `InfoResult`

### HeaderCard

头部卡片组件，支持主题色、副标题、标题、描述、额外内容等，适用于页面头部、资源目录、组件市场等场景。根据传入的颜色自动计算衍生颜色，生成协调的视觉效果。

#### 属性

| 属性           | 类型               | 默认值             | 描述                                                                    |
|--------------|------------------|-----------------|-----------------------------------------------------------------------|
| className    | string           | -               | 自定义类名                                                                 |
| style        | object           | -               | 卡片容器自定义样式对象                                                           |
| contentStyle | object           | -               | 内容区域自定义样式对象                                                           |
| color        | string           | HeaderCard.Blue | 主题颜色，支持预设颜色或自定义颜色值                                                    |
| subtitle     | ReactNode        | -               | 副标题，支持字符串或 JSX（如带 Tag 的复合内容）                                          |
| title        | ReactNode        | -               | 标题                                                                    |
| description  | ReactNode        | -               | 描述文字                                                                  |
| content      | ReactNode        | -               | 描述文字下方的额外内容区域，适合放置标签、统计信息等                                            |
| footer       | ReactNode        | -               | 底部操作区域，通常放置按钮组                                                        |
| icon         | ReactNode        | -               | 角落图标元素，带有浮动动画效果                                                       |
| iconPosition | string           | 'right-bottom'  | 图标位置，可选值：'right-bottom' \| 'right-top' \| 'left-bottom' \| 'left-top' |
| iconSize     | string \| number | 96              | 图标容器大小，支持数字（px）或字符串                                                   |
| children     | ReactNode        | -               | 右侧额外内容区域，通常放置搜索框、表单等                                                  |

### AuroraCard

极光流光激活容器组件，使用流动彩边、呼吸光晕和玻璃质感模拟激活态视觉效果。

#### 属性

| 属性           | 类型               | 默认值                          | 描述                                  |
|--------------|------------------|------------------------------|-------------------------------------|
| className    | string           | -                            | 自定义类名                               |
| style        | object           | -                            | 外层容器自定义样式对象                         |
| children     | ReactNode        | -                            | 内容区域                                 |
| width        | number \| string | '100%'                       | 组件宽度，支持数字（px）或字符串                   |
| minHeight    | number \| string | 220                          | 最小高度，支持数字（px）或字符串                   |
| radius       | number \| string | 32                           | 外层圆角大小                              |
| padding      | number \| string | 28                           | 内容区内边距                              |
| ringWidth    | number \| string | 2.5                          | 激活彩边厚度                              |
| blur         | number \| string | 28                           | 外围光晕模糊半径                            |
| color        | string           | AuroraCard.Blue       | 主色                                  |
| secondaryColor | string         | AuroraCard.Purple     | 次级流动色                               |
| accentColor  | string           | AuroraCard.Pink       | 点缀流动色                               |
| background   | string           | '#ffffff'                    | 内层内容面板背景                            |
| glow         | number           | 1                            | 光晕强度系数                              |
| flowSpeed    | number           | 1                            | 流光速度系数，值越大流动越快                      |
| variant      | string           | 'soft'                       | 视觉风格，可选值：'soft'（柔和乳光）\| 'vivid'（彩色流光边框） |
| animated     | boolean          | true                         | 是否启用旋转和呼吸动画                         |

### StackCard

层叠卡片容器组件，可包裹其他 Card 类组件，在背后生成层叠视觉效果。

#### 属性

| 属性               | 类型               | 默认值                                         | 描述                                                                    |
|------------------|------------------|---------------------------------------------|-----------------------------------------------------------------------|
| className        | string           | -                                           | 自定义类名                                                                 |
| style            | object           | -                                           | 外层容器自定义样式                                                             |
| children         | ReactElement     | -                                           | 被包裹的主卡片内容，仅允许一个子节点                                                    |
| layers           | number           | 2                                           | 背后层叠数量（不包含最上层主卡片）                                                     |
| offset           | number \| string | 8                                           | 每层偏移距离，支持数字（px）或字符串                                                   |
| offsetDirection  | string           | 'right-bottom'                              | 偏移方向，可选值：'right-bottom' \| 'right-top' \| 'left-bottom' \| 'left-top' |
| radius           | number \| string | '12px'                                      | 背后层圆角，支持数字（px）或字符串                                                    |
| layerBackground  | string           | 自动读取 children 背景 / '#ffffff'                | 背后层背景样式，支持颜色值或渐变等 background 值；未传时会尝试读取子节点样式                          |
| layerColor       | string           | -                                           | 背后层背景颜色，优先级高于 layerBackground                                         |
| layerBorderColor | string           | 自动读取 children 边框 / 'rgba(15, 23, 42, 0.08)' | 背后层边框颜色；未传时会尝试读取子节点边框样式                                               |
| layerShadow      | string           | '0 6px 20px rgba(15, 23, 42, 0.06)'         | 背后层阴影样式                                                               |
| opacityStep      | number           | 0.12                                        | 每向后一层透明度递减值，值越大层叠透明差异越明显                                              |
| minLayerOpacity  | number           | 0.35                                        | 背景层最小透明度（范围 0~1），防止后层完全不可见                                            |

### PersonalCard

个人档案卡片组件，支持大模式、纵向和横向三种展示模式，用于展示人员信息。

#### 属性

| 属性          | 类型     | 默认值      | 描述                                             |
|-------------|--------|----------|------------------------------------------------|
| avatar      | string | -        | 头像图片地址                                         |
| name        | string | -        | 姓名                                             |
| title       | string | -        | 职位/头衔                                          |
| description | string | -        | 个人简介                                           |
| phone       | string | -        | 电话号码                                           |
| email       | string | -        | 邮箱地址                                           |
| moreInfo    | array  | []       | 附加信息数组，格式为 [{ label, content }]                |
| status      | string | 'online' | 在线状态，可选值：'online' \| 'offline' \| 'busy'       |
| badge       | string | -        | 徽章文字                                           |
| mode        | string | 'large'  | 显示模式，可选值：'large' \| 'vertical' \| 'horizontal' |

### defaultColors

默认颜色配置对象，包含一组预设的颜色值，用于组件库中各组件的配色方案。

#### 颜色列表

| 颜色名称   | 颜色值       |
|--------|-----------|
| Purple | '#9333ea' |
| Orange | '#fb923c' |
| Blue   | '#0ea5e9' |
| Pink   | '#fb7185' |
| Green  | '#10b981' |
| Yellow | '#f59e0b' |
| Red    | '#ef4444' |
| Gray   | '#6b7280' |
| Black  | '#000000' |

### withColors

高阶函数，用于将默认颜色绑定到目标组件上。调用后，目标组件会获得：

- `Colors` 属性：包含所有预设颜色的对象
- 各个颜色名称的直接属性（如 `Purple`、`Orange` 等）

#### 用法示例

```javascript
import { withColors } from '@kne/react-box';

// 将颜色绑定到组件
withColors(MyComponent);

// 使用颜色
MyComponent.Purple    // '#9333ea'
MyComponent.Colors    // { Purple: '#9333ea', Orange: '#fb923c', ... }
```

