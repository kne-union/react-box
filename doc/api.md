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
