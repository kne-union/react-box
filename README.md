
# react-box


### 描述

一个轻量级的 React 设计组件库，专注于提供精致美观的信息展示小组件


### 安装

```shell
npm i --save @kne/react-box
```


### 概述

一个轻量级的 React 设计组件库，专注于提供精致美观的信息展示小组件。组件采用现代化 CSS 变量和 SCSS 模块化样式，支持灵活的定制和响应式布局。所有组件均遵循统一的命名规范，代码简洁易用，无需外部字体依赖。

目前提供五种常用展示组件：多彩卡片组件、毛玻璃卡片组件、弹性方块组件、结果展示组件和个人档案卡片组件，每种组件都经过精心设计，具有平滑的过渡动画和细腻的视觉效果，能够快速提升应用的界面质感。


### 示例(全屏)

#### 示例代码

- ColorfulCard
- 多彩渐变卡片组件，支持多种预设颜色和自定义样式
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { ColorfulCard } = _ReactBox;
const { Flex, Badge } = antd;

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
            icon="🎨"
            title="Purple"
            description={ColorfulCard.Purple}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Orange}
            icon="🍊"
            title="Orange"
            description={ColorfulCard.Orange}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Blue}
            icon="💙"
            title="Blue"
            description={ColorfulCard.Blue}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Pink}
            icon="💗"
            title="Pink"
            description={ColorfulCard.Pink}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Green}
            icon="🌿"
            title="Green"
            description={ColorfulCard.Green}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Yellow}
            icon="💛"
            title="Yellow"
            description={ColorfulCard.Yellow}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Red}
            icon="❤️"
            title="Red"
            description={ColorfulCard.Red}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Gray}
            icon="🌑"
            title="Gray"
            description={ColorfulCard.Gray}
            style={{ width: '200px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Black}
            icon="⚫"
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
            icon="🎨"
            title="圆角 8px"
            description="小圆角风格"
            radius="8px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Blue}
            icon="💙"
            title="圆角 12px"
            description="中等圆角风格"
            radius="12px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Green}
            icon="🌿"
            title="圆角 16px"
            description="较大圆角风格"
            radius="16px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Orange}
            icon="🍊"
            title="圆角 24px"
            description="大圆角风格"
            radius="24px"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color={ColorfulCard.Pink}
            icon="💗"
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
          icon="🎨"
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
            icon="💎"
            title="Indigo"
            description="靛蓝色主题"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color="#8b5cf6"
            icon="💜"
            title="Violet"
            description="紫罗兰主题"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color="#ec4899"
            icon="🌹"
            title="Rose"
            description="玫瑰色主题"
            style={{ width: '180px' }}
          />
          <ColorfulCard
            color="#14b8a6"
            icon="💚"
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
- 结果展示组件
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),icons(@ant-design/icons),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { Result } = _ReactBox;
const { Flex, Button } = antd;
const { CheckOutlined } = icons;

const BaseExample = () => {
  return (
    <Result icon={<CheckOutlined />} title="Onboarding Successful!" description="Welcome to the platform. Your workspace is ready and waiting for your first project.">
      <Button type="primary" size="large" shape="round">
        Enter Dashboard
      </Button>
    </Result>
  );
};

render(<BaseExample />);

```

- PersonalCard
- 个人档案卡片组件 - 大模式、纵向和横向三种展示模式
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { PersonalCard } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={40} style={{ padding: '40px', alignItems: 'center' }}>
      {/* Large Mode */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0 }}>大模式</h3>
        <PersonalCard
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
          name="莎拉·詹金斯"
          title="高级账户战略师"
          description="我的使命是确保您的团队拥有轻松扩展所需的资源和战略指导。让我们携手共创辉煌。"
          phone="+86 138 0000 0000"
          email="sarah.j@example.com"
          moreInfo={[
            { label: '性别', content: '女' },
            { label: '年龄', content: '32' },
            { label: '部门', content: '账户管理' },
            { label: '职位', content: '高级账户战略师' }
          ]}
          status="online"
          mode="large"
        />
      </div>

      {/* Vertical Mode */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0 }}>纵向模式</h3>
        <PersonalCard
          mode="vertical"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
          name="莎拉·詹金斯"
          title="高级账户战略师"
          description="我的使命是确保您的团队拥有轻松扩展所需的资源和战略指导。"
          phone="+86 138 0000 0000"
          email="sarah.j@example.com"
          moreInfo={[
            { label: '性别', content: '女' },
            { label: '年龄', content: '32' },
            { label: '部门', content: '账户管理' }
          ]}
          status="online"
        />
      </div>

      {/* Horizontal Mode */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0 }}>横向模式</h3>
        <PersonalCard
          mode="horizontal"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
          name="莎拉·詹金斯"
          title="高级账户战略师"
          description="确保团队拥有轻松扩展所需的资源和战略指导"
          phone="+86 138 0000 0000"
          email="sarah.j@example.com"
          moreInfo={[
            { label: '性别', content: '女' },
            { label: '年龄', content: '32' },
            { label: '部门', content: '账户管理' },
            { label: '职位', content: '高级账户战略师' }
          ]}
          badge="在职"
          status="online"
        />
      </div>
    </Flex>
  );
};

render(<BaseExample />);

```

- PersonalCard-Status
- 个人档案卡片 - 状态切换示例
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { PersonalCard } = _ReactBox;
const { Flex, Select } = antd;
const { useState } = React;

const BaseExample = () => {
  const [status, setStatus] = useState('online');

  return (
    <Flex vertical gap={24} style={{ padding: '40px', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span>状态:</span>
        <Select
          value={status}
          onChange={setStatus}
          style={{ width: 120 }}
          options={[
            { label: '在线', value: 'online' },
            { label: '离线', value: 'offline' },
            { label: '忙碌', value: 'busy' }
          ]}
        />
      </div>

      <PersonalCard
        avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
        name="莎拉·詹金斯"
        title="高级账户战略师"
        description="我的使命是确保您的团队拥有轻松扩展所需的资源和战略指导。让我们携手共创辉煌。"
        phone="+86 138 0000 0000"
        email="sarah.j@example.com"
        moreInfo={[
          { label: '性别', content: '女' },
          { label: '年龄', content: '32' },
          { label: '部门', content: '账户管理' },
          { label: '职位', content: '高级账户战略师' }
        ]}
        status={status}
        mode="large"
      />
    </Flex>
  );
};

render(<BaseExample />);

```


### API

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

### PersonalCard

个人档案卡片组件，支持大模式、纵向和横向三种展示模式，用于展示人员信息。

#### 属性

| 属性          | 类型     | 默认值      | 描述                                               |
|-------------|--------|----------|--------------------------------------------------|
| avatar      | string | -        | 头像图片地址                                           |
| name        | string | -        | 姓名                                               |
| title       | string | -        | 职位/头衔                                            |
| description | string | -        | 个人简介                                             |
| phone       | string | -        | 电话号码                                             |
| email       | string | -        | 邮箱地址                                             |
| moreInfo    | array  | []       | 附加信息数组，格式为 [{ label, content }]                  |
| status      | string | 'online' | 在线状态，可选值：'online' \\| 'offline' \\| 'busy'       |
| badge       | string | -        | 徽章文字                                             |
| mode        | string | 'large'  | 显示模式，可选值：'large' \\| 'vertical' \\| 'horizontal' |

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

