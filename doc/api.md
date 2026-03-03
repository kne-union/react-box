### Card

通用卡片组件，支持标题、图标和操作区域，适用于展示图表、统计数据等内容。

#### 属性

| 属性        | 类型        | 默认值    | 描述                               |
|-----------|-----------|--------|----------------------------------|
| className | string    | -      | 自定义类名                            |
| title     | ReactNode | -      | 卡片标题                             |
| icon      | ReactNode | -      | 标题图标，通常为 emoji 或图标组件             |
| extra     | ReactNode | -      | 标题栏右侧的额外内容，可放置操作按钮等              |
| children  | ReactNode | -      | 卡片主体内容                           |
| padding   | string    | '24px' | 内边距（通过 CSS 变量 --card-padding 控制） |
| radius    | string    | '12px' | 圆角大小（通过 CSS 变量 --card-radius 控制） |
| border    | boolean   | true   | 是否显示边框                           |
| style     | object    | -      | 自定义样式对象                          |

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
