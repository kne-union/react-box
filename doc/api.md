### Card

通用卡片组件，支持标题、图标、嵌套条目与外观主题，适用于展示图表、统计与结构化内容。

可通过 `theme` 选用内置或自定义主题；`color` / `colors` 控制色板；`prefix` 开启横向媒体条目布局（常用于嵌套子卡）。

#### 属性

| 属性        | 类型                          | 默认值    | 描述                                                                |
| ----------- | ----------------------------- | --------- | ------------------------------------------------------------------- |
| className   | string                        | -         | 自定义类名                                                          |
| title       | ReactNode                     | -         | 卡片标题                                                            |
| icon        | ReactNode                     | -         | 标题图标，通常为 emoji 或图标组件                                   |
| extra       | ReactNode                     | -         | 标题栏右侧的额外内容，可放置操作按钮等                              |
| subtitle    | ReactNode                     | -         | 副标题；有值时标题区改为上下堆叠布局                                |
| description | ReactNode                     | -         | 描述文案，渲染在内容区顶部                                          |
| prefix      | ReactNode \| string \| number | -         | 左侧媒体/前缀；有值时进入横向条目布局（常用于嵌套子卡）             |
| footer      | ReactNode                     | -         | 底部区域                                                            |
| children    | ReactNode                     | -         | 卡片主体内容；可嵌套子 `Card`                                       |
| size        | string                        | 'default' | 卡片尺寸，可选值：'large' \| 'default' \| 'small'                   |
| padding     | string \| number              | -         | 内边距，会覆盖 size 的默认值（通过 CSS 变量 `--card-padding` 控制） |
| radius      | string \| number              | '12px'    | 圆角大小（通过 CSS 变量 `--card-radius` 控制）                      |
| border      | boolean                       | true      | 是否显示边框                                                        |
| theme       | string                        | -         | 主题名；内置：`ribbon` \| `inset` \| `halo` \| `split`              |
| color       | string                        | -         | 主题主色；与主题注册色不同时，会丢弃预设写死色板并按新主色重算      |
| colors      | object                        | -         | 色板覆盖项，见下方「色板字段」                                      |
| hover       | boolean                       | true      | 主题卡是否启用 hover 阴影/描边动画；传 `false` 可关闭               |
| style       | object                        | -         | 自定义样式对象；也可覆盖 `--card-*` CSS 变量                        |

#### 布局约定

- **普通卡**：无 `prefix` 时为纵向结构：`header` → `content`（`description` + `children`）→ `footer`。
- **媒体条目**：有 `prefix` 时为横向：左侧前缀 + 右侧主区。字符串 / 数字 `prefix` 会渲染为默认徽章。
- **嵌套**：外卡使用主题，内卡用 `prefix` 做列表项（如 `ribbon` / `inset`），或用无边框子卡做双栏（如 `split`）。
- **副标题**：传入 `subtitle` 时，标题区上下堆叠（meta 行在上，标题在下）。

#### 内置主题（按外观）

| 名称   | 外观特点                       | 快捷组件      |
| ------ | ------------------------------ | ------------- |
| ribbon | 顶栏色带 + 嵌套条目            | `Card.Ribbon` |
| inset  | 白底列表容器 + 浅色内嵌条目    | -             |
| halo   | 光晕底 + 圆环媒体区 + 三列底栏 | -             |
| split  | 淡紫渐变底 + 双栏白底子卡      | -             |

```jsx
import { Card } from '@kne/react-box';

<Card.Ribbon subtitle="阶段甲" title="手作入门课" footer={<>...</>}>
  <Card prefix="笔记" title="读完起步指南" description="约十五分钟" />
</Card.Ribbon>

<Card theme="inset" title="本周焦点">
  <Card prefix="01" title="画好空状态插画" extra="2 → 5" description="..." />
</Card>

<Card theme="halo" footer={footer}>
  {/* 自定义圆环 + 正文 */}
</Card>
<Card theme="split" title="练习工具箱" description="...">
  <Card border={false} title="快速上手" description="..." />
  <Card border={false} title="深入琢磨" description="..." />
</Card>
```

#### 主题系统概览

主题配置拆成两部分：

1. **结构 token**：圆角、字号、间距、是否显示顶栏色带（`accentBar`）、`css` 等，决定布局骨架。
2. **色板**：由主色 `color` 经 `createThemeColors(color, overrides)` 派生（边框、面板、glow、hover 等），可用主题扁平色字段或实例 `colors` 覆盖。

解析顺序（简化）：

1. `theme`（或全局 `defaultTheme`）取出主题配置。
2. 若实例 `color` 与主题注册色不同 → 丢弃主题里写死的色板字段，按新主色重算。
3. `createThemeColors`：主题上可为**函数**，或 **`card.createThemeColors` 注册表中的字符串名**；未配置则用默认实现。
4. 合并 `colors` / 主题扁平色字段为 overrides。
5. 写入 `--card-*` CSS 变量；若主题有 `css`，挂载到 `[data-card-theme="name"]`。

#### 换色（同一结构，换主色）

```jsx
{
  /* 快捷组件 */
}
<Card.Ribbon color="#7c3aed" subtitle="阶段甲" title="手作入门课">
  <Card prefix="笔记" title="..." description="..." />
</Card.Ribbon>;

{
  /* 或 theme + color */
}
<Card theme="inset" color="#0d9488" title="本周焦点">
  ...
</Card>;

{
  /* 局部覆盖色板 */
}
<Card.Ribbon color="#ec4899" colors={{ glow: '#f9a8d4', titleColor: '#831843', hoverShadow: '0 14px 36px rgba(236, 72, 153, 0.28)' }} style={{ '--card-radius': '20px' }} />;
```

自定义内容若要跟随换色，请使用主题 CSS 变量（如 `var(--card-accent)`、`var(--card-description-color)`），避免写死 hex。

关闭 hover：`<Card theme="inset" hover={false} />`（覆盖主题默认开启）。

#### 自定义色板算法

**推荐：在 `preset` 注册算法，主题用字符串引用**（可与结构主题分离、多主题复用同一算法）：

```jsx
import { preset, createThemeColors, Card } from '@kne/react-box';

const createWarmColors = (color, overrides = {}) =>
  createThemeColors(color, {
    glow: '#fbbf24',
    surface: '#fffbeb',
    titleColor: '#7c2d12',
    mutedColor: '#9a3412',
    metricColor: '#b45309',
    hoverShadow: '0 16px 40px rgba(194, 65, 12, 0.28)',
    ...overrides
  });

preset({
  card: {
    createThemeColors: {
      warm: createWarmColors
    },
    themes: {
      // 结构可对齐 ribbon，色板引用注册表
      warm: {
        accent: true,
        accentBar: true,
        color: '#c2410c',
        radius: 15,
        padding: '20px 16px',
        createThemeColors: 'warm'
      }
    }
  }
});

<Card theme="warm" title="秋日手作系列">
  <Card prefix="笔记" title="暖色配色备忘" description="琥珀光晕" />
</Card>
<Card theme="warm" color="#a16207" title="丰收手作系列" />;
```

内置 `inset` / `halo` / `split` 已采用同名字符串引用（见 `globalParams.card.createThemeColors`）。

**也可**：实例级传入 `colors={createWarmColors(color)}`，或主题上直接挂函数 `createThemeColors: (color, overrides) => ...`（不经过注册表）。

#### 用 `preset()` 注册自定义主题

与 `@kne/react-fetch` 等包用法类似，在应用入口合并主题与色板算法：

```jsx
import { preset, createThemeColors, Card } from '@kne/react-box';

preset({
  card: {
    // defaultTheme: 'ribbon',
    createThemeColors: {
      mist: (color, overrides) => createThemeColors(color, { surface: '#f0f9ff', glow: '#67e8f9', ...overrides })
    },
    themes: {
      mist: {
        accent: true,
        accentBar: true,
        color: '#0ea5e9',
        radius: 16,
        createThemeColors: 'mist',
        css: `
          & [data-slot="content"] {
            padding: 0;
          }
        `
      }
    }
  }
});

<Card theme="mist" title="Mist card" />;
const MistCard = Card.createTheme('MistCard', 'mist');
```

主题对象常用字段：

| 字段                                                 | 说明                                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `accent`                                             | 开启主题视觉（色带、面板、变量等）                                                   |
| `accentBar` / `accentBarHeight` / `accentBarOpacity` | 顶栏色带                                                                             |
| `color`                                              | 注册主色                                                                             |
| `createThemeColors`                                  | 函数，或 `card.createThemeColors` 中的**字符串名**；省略则用默认 `createThemeColors` |
| `hover`                                              | 主题默认是否 hover；内置主题均为开启。实例可用 `hover={false}` 关闭                  |
| `css`                                                | 主题样式字符串；`&` 会替换为 `[data-card-theme="name"]`                              |
| 结构 token                                           | `radius`、`padding`、`titleFontSize`、`itemPadding`、`contentGap` 等                 |
| 扁平色字段                                           | 与下方色板字段同名时可写在主题根上，作为默认 overrides                               |

#### 色板字段（`colors` / 主题扁平色 / `createThemeColors` 返回值）

| 字段                                                               | 说明                              |
| ------------------------------------------------------------------ | --------------------------------- |
| `glow`                                                             | 光晕/辅色                         |
| `accentDeep`                                                       | 主色加深                          |
| `borderColor`                                                      | 边框色                            |
| `panelFrom` / `panelTo`                                            | 面板渐变起止                      |
| `surface`                                                          | 表面底色                          |
| `titleColor` / `subtitleColor` / `mutedColor` / `descriptionColor` | 标题 / 副标题 / 弱文案 / 正文描述 |
| `itemBorderColor` / `itemBackground` / `itemTitleColor`            | 嵌套条目                          |
| `itemPrefixBg` / `itemPrefixColor`                                 | 前缀徽章                          |
| `footerBorder` / `footerValue` / `metricColor`                     | 底栏与指标色                      |
| `backgroundImage`                                                  | 背景图/渐变（如 halo / split）    |
| `shadow` / `hoverShadow` / `hoverBorderColor` / `transition`       | 阴影与 hover                      |

默认导出：`createThemeColors`、`Card.createThemeColors`（同一实现）；`resolveCreateThemeColors` 用于解析主题上的函数或字符串引用；`THEME_COLOR_KEYS` 为可覆盖色板字段列表。

#### CSS 变量与 `data-slot`

主题会在根节点设置 `data-card-theme="{theme}"`，并注入例如：

- `--card-accent` / `--card-accent-deep` / `--card-glow`
- `--card-border` / `--card-surface` / `--card-panel-from` / `--card-panel-to`
- `--card-title` / `--card-subtitle` / `--card-muted` / `--card-description-color`
- `--card-item-*` / `--card-footer-*` / `--card-metric-color`
- `--card-shadow` / `--card-hover-shadow` / `--card-hover-border-color`

结构插槽（便于主题 `css` 选择，避免依赖 css-module hash）：

`card` / `item` / `header` / `meta` / `subtitle` / `title` / `extra` / `content` / `description` / `footer` / `media` / `prefix` / `prefix-badge` / `accent-bar` 等（值为 `data-slot`）。

```jsx
// 实例级微调
<Card.Ribbon style={{ '--card-subtitle-transform': 'none', '--card-radius': '20px' }} />
```

#### 静态方法 / 属性

| 名称                                       | 说明                              |
| ------------------------------------------ | --------------------------------- |
| `Card.themes`                              | 当前已注册主题配置（只读 getter） |
| `Card.createTheme(displayName, themeName)` | 创建绑定某主题的快捷组件          |
| `Card.createThemeColors(color, overrides)` | 由主色派生色板（默认算法）        |
| `Card.resolveCreateThemeColors(value)`     | 解析主题上的函数或注册表字符串名  |
| `Card.Ribbon`                              | 绑定 `ribbon` 的快捷组件          |

包级导出：`preset`、`globalParams`、`createThemeColors`、`resolveCreateThemeColors`、`THEME_COLOR_KEYS`、`CardRibbon`（即 `Card.Ribbon`）。

`globalParams.card.createThemeColors` 为算法注册表（内置含 `inset` / `halo` / `split`）；经 `preset({ card: { createThemeColors: { ... } } })` 合并。

### Zsh

终端窗口组件，模拟 macOS 终端样式，支持自定义标题和内容。

#### 属性

| 属性      | 类型      | 默认值       | 描述                                        |
| --------- | --------- | ------------ | ------------------------------------------- |
| className | string    | -            | 自定义类名                                  |
| title     | string    | '终端 — zsh' | 终端标题                                    |
| children  | ReactNode | -            | 终端内容                                    |
| padding   | string    | '32px'       | 内边距（通过 CSS 变量 --zsh-padding 控制）  |
| radius    | string    | '12px'       | 圆角大小（通过 CSS 变量 --zsh-radius 控制） |
| border    | boolean   | true         | 是否显示边框                                |
| style     | object    | -            | 自定义样式对象                              |

### ColorfulCard

多彩渐变卡片组件，支持多种预设颜色和自定义样式，具有精美的光晕效果和平滑的悬停动画。

#### 属性

| 属性        | 类型      | 默认值              | 描述                                   |
| ----------- | --------- | ------------------- | -------------------------------------- |
| className   | string    | -                   | 自定义类名                             |
| color       | string    | ColorfulCard.Purple | 主题颜色，支持预设颜色或自定义颜色值   |
| radius      | string    | '12px'              | 圆角大小                               |
| padding     | string    | '24px'              | 内边距                                 |
| style       | object    | -                   | 自定义样式对象                         |
| icon        | ReactNode | -                   | 图标元素，通常为 emoji 或图标组件      |
| title       | ReactNode | -                   | 卡片标题                               |
| description | ReactNode | -                   | 卡片描述文字                           |
| children    | ReactNode | -                   | 卡片底部内容区域（可添加按钮、标签等） |

### GlassCard

毛玻璃效果卡片组件，使用 CSS backdrop-filter 实现透明模糊效果。

#### 属性

| 属性      | 类型   | 默认值 | 描述       |
| --------- | ------ | ------ | ---------- |
| className | string | -      | 自定义类名 |
| radius    | string | '12px' | 圆角大小   |

### Jelly

弹性方块组件，支持自定义颜色、尺寸和圆角，提供多种预设配色。

#### 属性

| 属性         | 类型   | 默认值       | 描述                        |
| ------------ | ------ | ------------ | --------------------------- |
| className    | string | -            | 自定义类名                  |
| size         | string | '60px'       | 方块尺寸                    |
| width        | string | -            | 方块宽度（优先级高于 size） |
| borderRadius | string | '18px'       | 圆角大小                    |
| color        | string | Jelly.Purple | 主题颜色                    |

### Result

结果展示组件，用于显示操作结果、状态提示等信息，支持自定义图标和颜色。

#### 属性

| 属性        | 类型      | 默认值    | 描述             |
| ----------- | --------- | --------- | ---------------- |
| className   | string    | -         | 自定义类名       |
| title       | ReactNode | -         | 标题             |
| icon        | ReactNode | -         | 图标             |
| description | ReactNode | -         | 描述文字         |
| color       | string    | '#10b981' | 主题颜色         |
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

| 属性         | 类型             | 默认值          | 描述                                                                           |
| ------------ | ---------------- | --------------- | ------------------------------------------------------------------------------ |
| className    | string           | -               | 自定义类名                                                                     |
| style        | object           | -               | 卡片容器自定义样式对象                                                         |
| contentStyle | object           | -               | 内容区域自定义样式对象                                                         |
| color        | string           | HeaderCard.Blue | 主题颜色，支持预设颜色或自定义颜色值                                           |
| subtitle     | ReactNode        | -               | 副标题，支持字符串或 JSX（如带 Tag 的复合内容）                                |
| title        | ReactNode        | -               | 标题                                                                           |
| description  | ReactNode        | -               | 描述文字                                                                       |
| content      | ReactNode        | -               | 描述文字下方的额外内容区域，适合放置标签、统计信息等                           |
| footer       | ReactNode        | -               | 底部操作区域，通常放置按钮组                                                   |
| icon         | ReactNode        | -               | 角落图标元素，带有浮动动画效果                                                 |
| iconPosition | string           | 'right-bottom'  | 图标位置，可选值：'right-bottom' \| 'right-top' \| 'left-bottom' \| 'left-top' |
| iconSize     | string \| number | 96              | 图标容器大小，支持数字（px）或字符串                                           |
| children     | ReactNode        | -               | 右侧额外内容区域，通常放置搜索框、表单等                                       |

### AuroraCard

极光流光激活容器组件，使用流动彩边、呼吸光晕和玻璃质感模拟激活态视觉效果。

#### 属性

| 属性           | 类型             | 默认值            | 描述                                                           |
| -------------- | ---------------- | ----------------- | -------------------------------------------------------------- |
| className      | string           | -                 | 自定义类名                                                     |
| style          | object           | -                 | 外层容器自定义样式对象                                         |
| children       | ReactNode        | -                 | 内容区域                                                       |
| width          | number \| string | '100%'            | 组件宽度，支持数字（px）或字符串                               |
| minHeight      | number \| string | 220               | 最小高度，支持数字（px）或字符串                               |
| radius         | number \| string | 32                | 外层圆角大小                                                   |
| padding        | number \| string | 28                | 内容区内边距                                                   |
| ringWidth      | number \| string | 2.5               | 激活彩边厚度                                                   |
| blur           | number \| string | 28                | 外围光晕模糊半径                                               |
| color          | string           | AuroraCard.Blue   | 主色                                                           |
| secondaryColor | string           | AuroraCard.Purple | 次级流动色                                                     |
| accentColor    | string           | AuroraCard.Pink   | 点缀流动色                                                     |
| background     | string           | '#ffffff'         | 内层内容面板背景                                               |
| glow           | number           | 1                 | 光晕强度系数                                                   |
| flowSpeed      | number           | 1                 | 流光速度系数，值越大流动越快                                   |
| variant        | string           | 'soft'            | 视觉风格，可选值：'soft'（柔和乳光）\| 'vivid'（彩色流光边框） |
| animated       | boolean          | true              | 是否启用旋转和呼吸动画                                         |

### StackCard

层叠卡片容器组件，可包裹其他 Card 类组件，在背后生成层叠视觉效果。

#### 属性

| 属性             | 类型             | 默认值                                            | 描述                                                                           |
| ---------------- | ---------------- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| className        | string           | -                                                 | 自定义类名                                                                     |
| style            | object           | -                                                 | 外层容器自定义样式                                                             |
| children         | ReactElement     | -                                                 | 被包裹的主卡片内容，仅允许一个子节点                                           |
| layers           | number           | 2                                                 | 背后层叠数量（不包含最上层主卡片）                                             |
| offset           | number \| string | 8                                                 | 每层偏移距离，支持数字（px）或字符串                                           |
| offsetDirection  | string           | 'right-bottom'                                    | 偏移方向，可选值：'right-bottom' \| 'right-top' \| 'left-bottom' \| 'left-top' |
| radius           | number \| string | '12px'                                            | 背后层圆角，支持数字（px）或字符串                                             |
| layerBackground  | string           | 自动读取 children 背景 / '#ffffff'                | 背后层背景样式，支持颜色值或渐变等 background 值；未传时会尝试读取子节点样式   |
| layerColor       | string           | -                                                 | 背后层背景颜色，优先级高于 layerBackground                                     |
| layerBorderColor | string           | 自动读取 children 边框 / 'rgba(15, 23, 42, 0.08)' | 背后层边框颜色；未传时会尝试读取子节点边框样式                                 |
| layerShadow      | string           | '0 6px 20px rgba(15, 23, 42, 0.06)'               | 背后层阴影样式                                                                 |
| opacityStep      | number           | 0.12                                              | 每向后一层透明度递减值，值越大层叠透明差异越明显                               |
| minLayerOpacity  | number           | 0.35                                              | 背景层最小透明度（范围 0~1），防止后层完全不可见                               |

### PersonalCard

个人档案卡片组件，支持大模式、纵向和横向三种展示模式，用于展示人员信息。

### ResultCard

简约结果卡片组件，用于显示操作结果、状态提示等信息，支持底部信息列表。

#### 属性

| 属性        | 类型      | 默认值    | 描述                                                                               |
| ----------- | --------- | --------- | ---------------------------------------------------------------------------------- |
| className   | string    | -         | 自定义类名                                                                         |
| title       | ReactNode | -         | 标题                                                                               |
| icon        | ReactNode | -         | 图标                                                                               |
| description | ReactNode | -         | 描述文字                                                                           |
| color       | string    | '#07c160' | 主题颜色                                                                           |
| items       | array     | []        | 底部信息列表，格式为 [{ icon, label, value }]，icon 支持内置名称或自定义 ReactNode |
| children    | ReactNode | -         | 底部操作区域内容                                                                   |

#### items 子项属性

| 属性  | 类型                | 默认值 | 描述                                                     |
| ----- | ------------------- | ------ | -------------------------------------------------------- |
| icon  | string \| ReactNode | -      | 图标，内置名称：'briefcase'、'clock'，或自定义 ReactNode |
| label | string              | -      | 标签名                                                   |
| value | ReactNode           | -      | 值                                                       |

#### 快捷组件

`ResultCard` 提供以下常用状态快捷组件，均支持与 `ResultCard` 相同的属性，并内置默认图标与主题色：

- `ResultCard.Success`
- `ResultCard.Warning`
- `ResultCard.Error`
- `ResultCard.Info`

同时也提供顶层导出：

- `ResultCardSuccess`
- `ResultCardWarning`
- `ResultCardError`
- `ResultCardInfo`

### PersonalCard

个人档案卡片组件，支持大模式、纵向和横向三种展示模式，用于展示人员信息。

#### 属性

| 属性        | 类型                | 默认值   | 描述                                                     |
| ----------- | ------------------- | -------- | -------------------------------------------------------- |
| avatar      | string \| function  | -        | 头像图片地址，或 `({ className }) => ReactNode` 渲染函数 |
| name        | string \| ReactNode | -        | 姓名                                                     |
| title       | string \| ReactNode | -        | 职位/头衔                                                |
| description | string \| ReactNode | -        | 个人简介                                                 |
| phone       | string              | -        | 电话号码                                                 |
| email       | string              | -        | 邮箱地址                                                 |
| moreInfo    | array               | []       | 附加信息数组，格式为 [{ label, content }]                |
| status      | string              | 'online' | 在线状态，可选值：'online' \| 'offline' \| 'busy'        |
| badge       | string              | -        | 徽章文字                                                 |
| mode        | string              | 'large'  | 显示模式，可选值：'large' \| 'vertical' \| 'horizontal'  |
| extra       | ReactNode           | -        | 卡片角落扩展区，可放置 Checkbox 等                       |
| footer      | ReactNode           | -        | 卡片底部操作区，可放置 ButtonGroup 等                    |
| selected    | boolean             | false    | 是否选中态                                               |
| className   | string              | -        | 自定义类名                                               |

### defaultColors

默认颜色配置对象，包含一组预设的颜色值，用于组件库中各组件的配色方案。

#### 颜色列表

| 颜色名称 | 颜色值    |
| -------- | --------- |
| Purple   | '#9333ea' |
| Orange   | '#fb923c' |
| Blue     | '#0ea5e9' |
| Pink     | '#fb7185' |
| Green    | '#10b981' |
| Yellow   | '#f59e0b' |
| Red      | '#ef4444' |
| Gray     | '#6b7280' |
| Black    | '#000000' |

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
MyComponent.Purple; // '#9333ea'
MyComponent.Colors; // { Purple: '#9333ea', Orange: '#fb923c', ... }
```
