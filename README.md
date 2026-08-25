<!--START_SECTION:DOC_MD-->

# react-box

### 描述

一个轻量级的 React 设计组件库，专注于提供精致美观的信息展示小组件

### 安装

```shell
npm i --save @kne/react-box
```

### 概述

一个轻量级的 React 设计组件库，专注于提供精致美观的信息展示小组件。组件采用现代化 CSS 变量和 SCSS 模块化样式，支持灵活的定制和响应式布局。所有组件均遵循统一的命名规范，代码简洁易用，无需外部字体依赖。

`Card` 提供按外观命名的内置主题（`ribbon` / `inset` / `halo` / `split`）：结构与色板分离，可用 `color` 换主色、用 `colors` 覆盖色板。自定义算法可在 `preset({ card: { createThemeColors } })` 注册，主题里用字符串引用（如 `createThemeColors: 'warm'`）。同结构换色推荐 `Card.Ribbon`。

目前提供通用卡片、终端窗口、多彩卡片、毛玻璃卡片、弹性方块、结果展示、结果卡片、个人档案卡片、头部卡片、极光卡片、光晕边框与层叠卡片等展示组件，均经过精心设计，具有平滑过渡与细腻视觉效果，可快速提升界面质感。


### 示例(全屏)

#### 示例代码

- Card
- 通用卡片组件：内置 ribbon / inset / halo / split 外观主题，支持 theme / color 换色、colors / createThemeColors 自定义色板与嵌套条目布局
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { Card, createThemeColors, preset, resolveCreateThemeColors, THEME_COLOR_KEYS } = _ReactBox;
const { Flex, Space, Button } = antd;

/** 示例装饰色跟随当前 Card 主题变量，换 color 时一并变色 */
const indexStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: 22,
  height: 22,
  borderRadius: 7,
  background: 'linear-gradient(135deg, var(--card-accent, #4F46E5) 0%, var(--card-glow, #7C6CF6) 100%)',
  color: '#fff',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.02em',
  lineHeight: 1,
  flexShrink: 0
};

const topBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: 6,
  background: 'color-mix(in srgb, var(--card-accent, #4F46E5) 12%, transparent)',
  color: 'var(--card-accent, #4F46E5)',
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1.2
};

const ringChipStyle = {
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: '0.04em',
  color: 'var(--card-muted, #9997B8)',
  lineHeight: 1
};

const footerDividerStyle = {
  width: 1,
  alignSelf: 'stretch',
  minHeight: 44,
  margin: '0 18px',
  background: 'color-mix(in srgb, var(--card-accent, #4F46E5) 14%, transparent)',
  flexShrink: 0
};

const sparkleBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: 8,
  flexShrink: 0,
  background: 'linear-gradient(135deg, var(--card-accent, #4F46E5) 0%, var(--card-glow, #7C6CF6) 100%)',
  boxShadow: '0 6px 16px color-mix(in srgb, var(--card-accent, #4F46E5) 55%, transparent)'
};

const SparkleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M6.038 1.788L6.77 3.575L8.557 4.306L6.77 5.038L6.038 6.825L5.307 5.038L3.52 4.306L5.307 3.575L6.038 1.788Z" stroke="white" strokeWidth="1.3" />
    <path d="M10.262 6.987L10.749 8.125L11.887 8.612L10.749 9.1L10.262 10.237L9.774 9.1L8.637 8.612L9.774 8.125L10.262 6.987Z" stroke="white" strokeWidth="1.3" />
  </svg>
);

const HaloRing = () => (
  <div
    style={{
      width: 132,
      height: 132,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: 'rgba(255,255,255,0.01)',
      boxShadow: 'inset 0 0 26px color-mix(in srgb, var(--card-accent, #4F46E5) 55%, transparent)'
    }}
  >
    <div
      style={{
        width: 110,
        height: 110,
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--card-description-color, #161431)', letterSpacing: '-0.03em', lineHeight: 1 }}>进阶</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--card-muted, #8C8AAE)', lineHeight: 1, letterSpacing: '0.02em' }}>→</div>
      <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
        <span style={ringChipStyle}>笔记</span>
        <span style={ringChipStyle}>工坊</span>
      </div>
    </div>
  </div>
);

const HaloFooter = () => (
  <>
    <div style={{ flex: '0 0 auto', minWidth: 72 }}>
      <div style={{ color: 'var(--card-metric-color, #BE123C)', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>2</div>
      <div style={{ marginTop: 6, color: 'var(--card-muted, #6F6D95)', fontSize: 11, lineHeight: 1.4 }}>
        → 5
        <br />
        熟练度
      </div>
    </div>
    <div style={footerDividerStyle} />
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ color: 'var(--card-footer-value, #047857)', fontSize: 18, fontWeight: 700, lineHeight: 1.15 }}>3 小时</div>
      <div style={{ marginTop: 6, color: 'var(--card-muted, #6F6D95)', fontSize: 11, lineHeight: 1.4 }}>专注制作时段</div>
    </div>
    <div style={footerDividerStyle} />
    <div style={{ flex: 1.35, minWidth: 0 }}>
      <div style={{ color: 'var(--card-accent-deep, #3A2FA8)', fontSize: 16, fontWeight: 700, lineHeight: 1.15 }}>工坊</div>
      <div style={{ marginTop: 6, color: 'var(--card-muted, #6F6D95)', fontSize: 11, lineHeight: 1.4 }}>周六下午场</div>
    </div>
  </>
);

const HaloBody = ({ title }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '132px minmax(0, 1fr)',
      columnGap: 26,
      rowGap: 14,
      alignItems: 'start'
    }}
  >
    <div
      style={{
        gridColumn: 2,
        gridRow: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }}
    >
      <span style={sparkleBadgeStyle}>
        <SparkleIcon />
      </span>
      <span
        style={{
          color: 'var(--card-accent, #4F46E5)',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '-0.01em',
          lineHeight: 1.2
        }}
      >
        {title}
      </span>
    </div>
    <div style={{ gridColumn: 1, gridRow: 2 }}>
      <HaloRing />
    </div>
    <div
      style={{
        gridColumn: 2,
        gridRow: 2,
        color: 'var(--card-description-color, #161431)',
        fontSize: 13,
        lineHeight: 1.55,
        fontWeight: 500
      }}
    >
      早上先翻一遍筹备清单，空出一小时专注做一件手工，收工时写三行小结。坚持两周后再把专注时段拉长。
    </div>
  </div>
);

const paramsPanelStyle = {
  flex: 1,
  minWidth: 260,
  maxWidth: 420,
  margin: 0,
  padding: 16,
  borderRadius: 12,
  background: '#0f172a',
  color: '#e2e8f0',
  fontSize: 12,
  lineHeight: 1.55,
  overflow: 'auto',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
};

const paletteSnapshot = palette => ({
  color: palette.color,
  glow: palette.glow,
  borderColor: palette.borderColor,
  surface: palette.surface,
  hoverShadow: palette.hoverShadow
});

const ThemeShowcase = ({ title, hint, themeName, children, previewMaxWidth = 400, swatchColor, codeExtra }) => {
  const config = Card.themes?.[themeName] || {};
  const { css, createThemeColors: themeCreateColors, ...rest } = config;
  const buildColors = resolveCreateThemeColors ? resolveCreateThemeColors(themeCreateColors) : typeof themeCreateColors === 'function' ? themeCreateColors : createThemeColors;
  const baseColor = rest.color || '#4f46e5';
  const defaultPalette = buildColors(baseColor, rest.colors || {});
  const swatchPalette = swatchColor ? buildColors(swatchColor, {}) : null;
  const createThemeColorsLabel = typeof themeCreateColors === 'function' ? '(color, overrides) => palette /* custom */' : typeof themeCreateColors === 'string' ? themeCreateColors : undefined;
  const code = JSON.stringify(
    {
      [themeName]: {
        ...rest,
        ...(createThemeColorsLabel != null ? { createThemeColors: createThemeColorsLabel } : null),
        ...(css ? { css: '/* see theme.css mount via data-slot */' } : null)
      },
      usage: {
        default: &#96;<Card theme="${themeName}" />&#96;,
        ...(swatchColor ? { recolor: &#96;<Card theme="${themeName}" color="${swatchColor}" />&#96; } : null)
      },
      palette: {
        default: paletteSnapshot(defaultPalette),
        ...(swatchPalette ? { [&#96;color ${swatchColor}&#96;]: paletteSnapshot(swatchPalette) } : null)
      },
      ...codeExtra
    },
    null,
    2
  );

  return (
    <div style={{ width: '100%' }}>
      <h3 style={{ margin: '8px 0 4px', fontSize: 16, fontWeight: 600, textAlign: 'center' }}>{title}</h3>
      {hint && <p style={{ margin: '0 0 12px', color: '#64748b', fontSize: 13, textAlign: 'center' }}>{hint}</p>}
      <Flex gap={20} wrap="wrap" align="flex-start" justify="center">
        <div style={{ flex: &#96;0 1 ${previewMaxWidth}px&#96;, width: '100%', maxWidth: previewMaxWidth }}>{children}</div>
        <pre style={paramsPanelStyle}>
          <div style={{ marginBottom: 8, color: '#94a3b8' }}>themes.{themeName}</div>
          {code}
        </pre>
      </Flex>
    </div>
  );
};

const InsetList = ({ title, badge, color }) => (
  <Card theme="inset" color={color} title={title} extra={<span style={topBadgeStyle}>{badge}</span>}>
    <Card prefix={<span style={indexStyle}>01</span>} title="画好市集摊位空状态插画" extra="2 → 5" description="对首日到场体验影响最大。先出三版草图，周五评审里定一版。" />
    <Card prefix={<span style={indexStyle}>02</span>} title="精简报名须知文案" extra="3 → 5" description="去掉行话，每步控制在十二字内，并与新插画语气对齐。" />
    <Card prefix={<span style={indexStyle}>03</span>} title="加上进度提示小浮层" extra="2 → 4" description="长保存时的通用反馈；三条里落地最快的一条。" />
  </Card>
);

const RibbonSample = ({ color, colors, subtitle, extra, title, goal, children, style }) => (
  <Card.Ribbon
    color={color}
    colors={colors}
    style={style}
    subtitle={subtitle}
    extra={extra}
    title={title}
    footer={
      <>
        <span>目标</span>
        <strong>{goal}</strong>
      </>
    }
  >
    {children}
  </Card.Ribbon>
);

const SplitSample = ({ color, title }) => (
  <Card theme="split" color={color} title={title} description="两张练习卡并排：先扫一眼说明，再选下午要走的一条线。">
    <Card border={false} title="快速上手" description="跟着五分钟清单走一遍，先做出粗糙样件。" />
    <Card border={false} title="深入琢磨" description="打开参考册，圈出两个喜欢的纹样并批注。" />
  </Card>
);

/** 自定义色板算法：先注册到 preset.createThemeColors，主题里用字符串引用 */
const createWarmColors = (color, overrides = {}) =>
  createThemeColors(color, {
    glow: '#fbbf24',
    surface: '#fffbeb',
    titleColor: '#7c2d12',
    mutedColor: '#9a3412',
    metricColor: '#b45309',
    hoverShadow: '0 16px 40px rgba(194, 65, 12, 0.28)',
    hoverBorderColor: 'rgba(194, 65, 12, 0.4)',
    ...overrides
  });

const stripColorTokens = theme => {
  const next = { ...(theme || {}) };
  (THEME_COLOR_KEYS || []).forEach(key => {
    delete next[key];
  });
  delete next.colors;
  delete next.key;
  return next;
};

preset({
  card: {
    createThemeColors: {
      warm: createWarmColors
    },
    themes: {
      warm: {
        ...stripColorTokens(Card.themes.ribbon),
        color: '#c2410c',
        createThemeColors: 'warm'
      }
    }
  }
});

const WarmSample = ({ color, subtitle, extra, title, goal }) => (
  <Card
    theme="warm"
    color={color}
    subtitle={subtitle}
    extra={extra}
    title={title}
    footer={
      <>
        <span>目标</span>
        <strong>{goal}</strong>
      </>
    }
  >
    <Card prefix="笔记" title="暖色配色备忘" description="琥珀光晕 · 奶油底色" />
    <Card prefix="工坊" title="海报临摹练习" description="单帧构图，大字为主" />
  </Card>
);

const BaseExample = () => {
  return (
    <Flex vertical gap={24} align="center" style={{ width: '100%' }}>
      <Flex vertical gap={24} style={{ width: '100%', maxWidth: 480 }}>
        <Card title="大尺寸卡片" icon="📊" size="large" extra={<a href="#">查看更多</a>}>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>大尺寸卡片，padding: 32px，标题更大</div>
        </Card>

        <Card title="默认尺寸卡片" icon="📊" extra={<a href="#">查看更多</a>}>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>这是卡片内容区域</div>
        </Card>

        <Card title="小尺寸卡片" icon="📊" size="small" extra={<a href="#">查看更多</a>}>
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>小尺寸卡片，padding: 16px，标题更小</div>
        </Card>

        <Card title="自定义样式" icon="🎨" padding="32px" radius="16px" style={{ borderLeft: '4px solid #741ce9' }}>
          <p style={{ margin: 0, color: '#475569' }}>通过 padding、radius 和 style 属性自定义卡片样式</p>
        </Card>

        <Card title="无边框卡片" icon="📄" border={false} padding="20px">
          <p style={{ margin: 0, color: '#475569' }}>设置 border=false 可以移除边框，适用于需要自定义背景或嵌入其他容器的场景</p>
        </Card>

        <Card
          title="操作按钮"
          icon="⚙️"
          extra={
            <Space>
              <Button type="link" size="small">
                编辑
              </Button>
              <Button type="link" size="small">
                删除
              </Button>
            </Space>
          }
        >
          <p style={{ margin: 0, color: '#475569' }}>在 extra 区域放置操作按钮，实现卡片的交互功能</p>
        </Card>

        <Card title="图表卡片" icon="📈" size="large">
          <div
            style={{
              height: '200px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b'
            }}
          >
            图表展示区域
          </div>
        </Card>

        <Card title="简洁卡片" size="small">
          <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>这是一个简洁的卡片，只包含标题和内容区域。适用于不需要额外装饰的场景。</p>
        </Card>
      </Flex>

      <ThemeShowcase title="inset（内嵌列表）" hint="默认色板 + color 换色（装饰角标跟随 --card-accent）" themeName="inset" swatchColor="#0d9488">
        <Flex vertical gap={16}>
          <InsetList title="本周焦点" badge="优先 3 条" />
          <InsetList title="本周焦点 · 青绿" badge="换色" color="#0d9488" />
        </Flex>
      </ThemeShowcase>

      <ThemeShowcase title="ribbon / Card.Ribbon" hint="默认色板 + color / colors 换色" themeName="ribbon" swatchColor="#7c3aed" previewMaxWidth={420}>
        <Flex vertical gap={16}>
          <RibbonSample subtitle="阶段乙" extra="第 5–8 周" title="市集实战营" goal="落地 3 → 4">
            <Card prefix="项目" title="跑通一条完整摊位故事" description="草稿 · 评审 · 上架" />
            <Card prefix="笔记" title="把耗时记进表格" description="16 小时 · 已统计" />
            <Card prefix="复盘" title="同伴互评一场" description="请导师旁听" />
          </RibbonSample>
          <RibbonSample color="#7c3aed" subtitle="阶段甲" extra="第 1–4 周" title="手作入门课" goal="练习 1 → 3">
            <Card prefix="笔记" title="读完起步指南" description="约十五分钟，先扫示例" />
            <Card prefix="工坊" title="做一个迷你样件" description="单屏成品，不必打磨" />
            <Card prefix="分享" title="发一张过程截图" description="丢进社群留言板" />
          </RibbonSample>
          <RibbonSample
            color="#ec4899"
            colors={{
              glow: '#f9a8d4',
              titleColor: '#831843',
              hoverShadow: '0 14px 36px rgba(236, 72, 153, 0.28)'
            }}
            style={{ '--card-subtitle-transform': 'none', '--card-radius': '20px' }}
            subtitle="冲刺周"
            extra="第 1–2 周"
            title="开市看板"
            goal="推进 1 → 3"
          >
            <Card prefix="统筹" title="冻结检查清单" description="负责人 · 截止日" />
            <Card prefix="视觉" title="打磨封面画幅" description="品牌过一遍" />
          </RibbonSample>
        </Flex>
      </ThemeShowcase>

      <ThemeShowcase title="halo（光晕圆环卡）" hint="默认色板 + color 换色（圆环/标题跟随主题变量）" themeName="halo" swatchColor="#db2777" previewMaxWidth={645}>
        <Flex vertical gap={16}>
          <Card theme="halo" footer={<HaloFooter />}>
            <HaloBody title="每日手作节奏" />
          </Card>
          <Card theme="halo" color="#db2777" footer={<HaloFooter />}>
            <HaloBody title="每日手作节奏 · 玫红" />
          </Card>
        </Flex>
      </ThemeShowcase>

      <ThemeShowcase title="split（双栏子卡）" hint="默认色板 + color 换色" themeName="split" swatchColor="#0891b2" previewMaxWidth={666}>
        <Flex vertical gap={16}>
          <SplitSample title="练习工具箱" />
          <SplitSample title="练习工具箱 · 青蓝" color="#0891b2" />
        </Flex>
      </ThemeShowcase>

      <ThemeShowcase
        title="自定义色板算法（字符串引用）"
        hint="在 card.createThemeColors 注册算法，主题里 createThemeColors: 'warm'；结构可复用 ribbon"
        themeName="warm"
        swatchColor="#a16207"
        codeExtra={{
          registry: {
            note: "preset({ card: { createThemeColors: { warm: fn }, themes: { warm: { createThemeColors: 'warm' } } } })",
            usage: '<Card theme="warm" color="#a16207" />',
            paletteAt: {
              '#c2410c': paletteSnapshot(createWarmColors('#c2410c')),
              '#a16207': paletteSnapshot(createWarmColors('#a16207'))
            }
          }
        }}
      >
        <Flex vertical gap={16}>
          <WarmSample subtitle="时令" extra="十月–十一月" title="秋日手作系列" goal="速写 1 → 3" />
          <WarmSample color="#a16207" subtitle="时令" extra="九月–十月" title="丰收手作系列 · 金" goal="速写 2 → 4" />
        </Flex>
      </ThemeShowcase>
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

      <h3>带图标</h3>
      <Flex gap={16} wrap="wrap">
        <Jelly color={Jelly.Purple} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Red} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Blue} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Green} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Orange} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </Jelly>
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

- ResultCard
- 简约结果卡片组件，内置成功、警告、失败、信息四种快捷状态，支持底部信息列表
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { ResultCard } = _ReactBox;
const { Flex, Button } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={64} style={{ padding: '40px 0' }}>
      {/* 基础用法 */}
      <ResultCard.Success
        title="本轮面试已完成"
        description="感谢您的参与，面试结果将在3个工作日内通知您"
        items={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="7" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            ),
            label: '测评主题',
            value: '天天拍车 HR 岗位'
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            label: '提交时间',
            value: '2026-04-15 14:30'
          }
        ]}
      >
        <Button type="primary" size="large" block style={{ marginTop: 24 }}>
          返回首页
        </Button>
      </ResultCard.Success>

      {/* 状态预设 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        <ResultCard.Success title="操作成功" description="您的数据已保存成功" />
        <ResultCard.Warning title="注意风险" description="当前配置尚未完全生效" />
        <ResultCard.Error title="提交失败" description="网络请求超时，请稍后重试" />
        <ResultCard.Info title="提示信息" description="您可以先完成基础设置" />
      </div>

      {/* 自定义颜色 */}
      <ResultCard
        title="自定义颜色"
        description="支持传入自定义颜色和图标"
        color="#8b5cf6"
        icon={
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 12L40 28H24L32 12Z" fill="currentColor" />
            <rect x="24" y="32" width="16" height="16" rx="2" fill="currentColor" />
          </svg>
        }
        items={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="7" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            ),
            label: '项目名称',
            value: 'React Box'
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            label: '创建时间',
            value: '2026-01-01'
          }
        ]}
      />

      {/* 自定义宽度 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        <ResultCard.Info
          width={320}
          title="窄卡片"
          description="通过 width 设置卡片宽度"
        />
        <ResultCard.Info
          width={480}
          title="宽卡片"
          description="通过 width 设置卡片宽度，支持数字（自动加px）或字符串"
        />
      </div>

      {/* 溢出测试 */}
      <ResultCard.Success
        title="您已成功预约「高级前端开发工程师（React方向）- 杭州余杭区」岗位的线上面试"
        description="面试将于2026年4月20日（周日）上午10:00开始，预计时长90分钟，请提前15分钟进入候考室完成设备检测与环境调试，迟到超过15分钟将视为自动放弃本次面试资格。"
        items={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="7" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            ),
            label: '期望工作城市及区域',
            value: '高级前端开发工程师（React方向）'
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            label: '面试时间',
            value: '2026-04-20 10:00-11:30'
          }
        ]}
      />
    </Flex>
  );
};

render(<BaseExample />);

```

- PersonalCard
- 个人档案卡片：三种模式、状态切换，以及无头像占位、无简介、只有姓名等空值示例
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

const renderCardList = (cards, mode, status) => (
  <Flex wrap gap={24} justify="center">
    {cards.map(item => {
      const { key, label, withStatus = true, ...cardProps } = item;
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <Tag color="blue">{label}</Tag>
          <PersonalCard mode={mode} {...(withStatus ? { status } : {})} {...cardProps} />
        </div>
      );
    })}
  </Flex>
);

const BaseExample = () => {
  const [mode, setMode] = useState('large');
  const [status, setStatus] = useState('online');

  const basicCards = useMemo(
    () => [
      {
        key: 'full',
        label: '完整信息',
        badge: '推荐',
        avatar,
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
        avatar,
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
        avatar,
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

  // 空值 / 占位：无头像、无简介、只有姓名等
  const emptyStateCards = useMemo(
    () => [
      {
        key: 'empty-avatar',
        label: '无头像（占位）',
        badge: '新入职',
        name: '陈思远',
        title: '前端工程师',
        description: '头像为空时显示占位头像，避免破损图片。',
        phone: '+86 139 1111 2222',
        email: 'chensiyuan@example.com',
        moreInfo: [
          { label: '性别', content: '男' },
          { label: '年龄', content: '27' },
          { label: '部门', content: '研发中心' },
          { label: '专长', content: 'React' }
        ]
      },
      {
        key: 'empty-description',
        label: '无简介',
        avatar,
        name: '赵清禾',
        title: '设计师',
        phone: '+86 137 3333 4444',
        email: 'zhaoqinghe@example.com',
        moreInfo: [
          { label: '性别', content: '女' },
          { label: '年龄', content: '26' },
          { label: '部门', content: '设计部' },
          { label: '专长', content: '视觉设计' }
        ]
      },
      {
        key: 'name-only',
        label: '只有姓名',
        name: '顾南星'
      },
      {
        key: 'no-status',
        label: '无 status',
        withStatus: false,
        avatar,
        name: '沈听澜',
        title: '内容运营',
        description: '不传 status 时不显示头像状态点。',
        phone: '+86 135 7777 8888',
        email: 'shentinglan@example.com',
        moreInfo: [
          { label: '性别', content: '女' },
          { label: '年龄', content: '28' },
          { label: '部门', content: '运营部' },
          { label: '专长', content: '内容策划' }
        ]
      },
      {
        key: 'empty-more-info',
        label: '无更多信息',
        avatar,
        name: '韩亦辰',
        title: '运营专员',
        description: '更多信息为空时不展示信息网格区域。',
        phone: '+86 136 5555 6666',
        email: 'hanyichen@example.com'
      }
    ],
    []
  );

  return (
    <Flex vertical gap={48} style={{ padding: '40px' }}>
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

      {renderCardList(basicCards, mode, status)}

      <Flex vertical gap={16}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>空值与占位示例</div>
        <div style={{ color: '#64748b', fontSize: 13 }}>
          无头像显示占位图；无简介 / 无更多信息 / 只有姓名时，对应容器整块不渲染；无 status 时不显示状态点。
        </div>
      </Flex>

      {renderCardList(emptyStateCards, mode, status)}
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
              subtitle={&#96;${name} 主题&#96;}
              title={&#96;${name} HeaderCard&#96;}
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
                    background: &#96;linear-gradient(135deg, ${color}40 0%, ${color}20 100%)&#96;,
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
  const [lineLength, setLineLength] = useState(0.5);
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
          <span>线长：</span>
          <div style={{ width: 160 }}>
            <Slider min={0.1} max={1} step={0.05} value={lineLength} onChange={setLineLength} />
          </div>
        </Flex>
      </Flex>

      <AuroraCard animated={animated} radius={radius} glow={glow} flowSpeed={flowSpeed} lineLength={lineLength} variant={variant} minHeight={280} style={{ maxWidth: 760, margin: '0 auto' }} {...themeStyle}>
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
        <AuroraCard  animated={animated} radius={radius} glow={glow} flowSpeed={flowSpeed} lineLength={lineLength} variant={variant} width={320} minHeight={168} padding={20} {...themeStyle}>
          <Flex vertical gap={10} justify="center" style={{ minHeight: 124, color: '#0f172a' }}>
            <AudioOutlined style={{ fontSize: 28 }} />
            <div style={{ fontSize: 22, fontWeight: 600 }}>语音待命</div>
            <div style={{ color: 'rgba(15,23,42,0.68)' }}>适合语音助手入口或悬浮模块</div>
          </Flex>
        </AuroraCard>

        <AuroraCard  animated={animated} radius={radius} glow={glow} flowSpeed={flowSpeed} lineLength={lineLength} variant={variant} width={320} minHeight={168} padding={20} color="#2dd4bf" secondaryColor="#38bdf8" accentColor="#a78bfa">
          <Flex vertical gap={10} justify="center" style={{ minHeight: 124, color: '#0f172a' }}>
            <BulbOutlined style={{ fontSize: 28 }} />
            <div style={{ fontSize: 22, fontWeight: 600 }}>智能建议</div>
            <div style={{ color: 'rgba(15,23,42,0.68)' }}>用于推荐卡、洞察提示或助手摘要</div>
          </Flex>
        </AuroraCard>

        <AuroraCard  animated={animated} radius={radius} glow={glow} flowSpeed={flowSpeed} lineLength={lineLength} variant={variant} width={320} minHeight={168} padding={20} color="#f472b6" secondaryColor="#a78bfa" accentColor="#60a5fa">
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

- GlowEffect
- 鼠标跟随光晕边框效果，包裹其他 Card 组件使用
- _ReactBox(@kne/current-lib_react-box)[import * as _ReactBox from "@kne/react-box"],antd(antd),icons(@ant-design/icons),(@kne/current-lib_react-box/dist/index.css)

```jsx
const { GlowEffect, Card, HeaderCard } = _ReactBox;
const { Flex, Slider, Switch, Segmented, Space, Tag, Button, Divider } = antd;
const { useState } = React;
const { RobotOutlined, AudioOutlined, ThunderboltOutlined, BulbOutlined } = icons;

const variantOptions = [
  { label: '彩色', value: 'default' },
  { label: '白色', value: 'white' }
];

const BaseExample = () => {
  const [blur, setBlur] = useState(0);
  const [proximity, setProximity] = useState(64);
  const [spread, setSpread] = useState(40);
  const [glow, setGlow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [variant, setVariant] = useState('default');
  const [borderWidth, setBorderWidth] = useState(1);
  const [movementDuration, setMovementDuration] = useState(2);

  return (
    <Flex vertical gap={32} style={{ padding: '24px 0' }}>
      <Flex wrap gap={16} align="center" justify="space-between">
        <Flex gap={12} align="center" wrap="wrap">
          <span>变体：</span>
          <Segmented value={variant} onChange={setVariant} options={variantOptions} />
        </Flex>
        <Flex gap={16} align="center" wrap="wrap">
          <span>常亮：</span>
          <Switch checked={glow} onChange={setGlow} />
          <span>禁用：</span>
          <Switch checked={disabled} onChange={setDisabled} />
          <span>模糊：</span>
          <div style={{ width: 120 }}>
            <Slider min={0} max={20} step={1} value={blur} onChange={setBlur} />
          </div>
          <span>扩散：</span>
          <div style={{ width: 120 }}>
            <Slider min={10} max={80} step={2} value={spread} onChange={setSpread} />
          </div>
          <span>感应：</span>
          <div style={{ width: 120 }}>
            <Slider min={0} max={200} step={8} value={proximity} onChange={setProximity} />
          </div>
          <span>边宽：</span>
          <div style={{ width: 100 }}>
            <Slider min={1} max={4} step={0.5} value={borderWidth} onChange={setBorderWidth} />
          </div>
          <span>速度：</span>
          <div style={{ width: 100 }}>
            <Slider min={0.5} max={4} step={0.5} value={movementDuration} onChange={setMovementDuration} />
          </div>
        </Flex>
      </Flex>

      <GlowEffect
        blur={blur}
        proximity={proximity}
        spread={spread}
        glow={glow}
        disabled={disabled}
        variant={variant}
        borderWidth={borderWidth}
        movementDuration={movementDuration}
      >
        <HeaderCard
          color={HeaderCard.Blue}
          title="GlowEffect 演示"
          subtitle="鼠标跟随光晕边框"
          description="将 GlowEffect 包裹在任何 Card 外部，自动读取子卡片的圆角。"
          content={
            <Space wrap>
              <Tag color="processing">proximity: {proximity}</Tag>
              <Tag color="purple">spread: {spread}</Tag>
              <Tag color="cyan">borderWidth: {borderWidth}</Tag>
            </Space>
          }
          footer={
            <Space>
              <Button type="primary" size="small">确认</Button>
              <Button size="small">取消</Button>
            </Space>
          }
        />
      </GlowEffect>

      <Divider style={{ margin: 0 }} />

      <div style={{ fontSize: 16, fontWeight: 600 }}>包裹不同卡片</div>

      <Flex wrap gap={24} justify="center">
        <GlowEffect
          radius={16}
          blur={blur}
          proximity={proximity}
          spread={spread}
          glow={glow}
          disabled={disabled}
          variant={variant}
          borderWidth={borderWidth}
          movementDuration={movementDuration}
        >
          <Card title="普通卡片" icon={<AudioOutlined />} style={{ width: 320, minHeight: 168 }}>
            <Flex vertical gap={10} justify="center" style={{ minHeight: 100, color: '#0f172a' }}>
              <div style={{ fontSize: 22, fontWeight: 600 }}>语音待命</div>
              <div style={{ color: 'rgba(15,23,42,0.68)' }}>适合语音助手入口或悬浮模块</div>
            </Flex>
          </Card>
        </GlowEffect>

        <GlowEffect
          radius={16}
          blur={blur}
          proximity={proximity}
          spread={spread}
          glow={glow}
          disabled={disabled}
          variant={variant}
          borderWidth={borderWidth}
          movementDuration={movementDuration}
          color="#2dd4bf"
          secondaryColor="#38bdf8"
          accentColor="#a78bfa"
        >
          <Card title="青紫光晕" icon={<BulbOutlined />} style={{ width: 320, minHeight: 168 }}>
            <Flex vertical gap={10} justify="center" style={{ minHeight: 100, color: '#0f172a' }}>
              <div style={{ fontSize: 22, fontWeight: 600 }}>智能建议</div>
              <div style={{ color: 'rgba(15,23,42,0.68)' }}>用于推荐卡、洞察提示或助手摘要</div>
            </Flex>
          </Card>
        </GlowEffect>

        <GlowEffect
          radius={999}
          blur={blur}
          proximity={proximity}
          spread={spread}
          glow={glow}
          disabled={disabled}
          variant={variant}
          borderWidth={borderWidth}
          movementDuration={movementDuration}
          color="#f472b6"
          secondaryColor="#a78bfa"
          accentColor="#60a5fa"
        >
          <Card title="胶囊形状" icon={<ThunderboltOutlined />} style={{ width: 320, minHeight: 168 }}>
            <Flex vertical gap={10} justify="center" style={{ minHeight: 100, color: '#0f172a', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 600 }}>快速激活</div>
              <div style={{ color: 'rgba(15,23,42,0.68)' }}>可做按钮强化态或激活态反馈</div>
            </Flex>
          </Card>
        </GlowEffect>
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
              未传入 &#96;layerBackground&#96;、&#96;layerColor&#96;、&#96;layerBorderColor&#96; 时，会尝试从单个子节点的 style 中读取背景和边框。
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

#### Card

通用卡片组件，支持标题、图标、嵌套条目与外观主题，适用于展示图表、统计与结构化内容。

可通过 `theme` 选用内置或自定义主题；`color` / `colors` 控制色板；`prefix` 开启横向媒体条目布局（常用于嵌套子卡）。

##### 属性

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

##### 布局约定

- **普通卡**：无 `prefix` 时为纵向结构：`header` → `content`（`description` + `children`）→ `footer`。
- **媒体条目**：有 `prefix` 时为横向：左侧前缀 + 右侧主区。字符串 / 数字 `prefix` 会渲染为默认徽章。
- **嵌套**：外卡使用主题，内卡用 `prefix` 做列表项（如 `ribbon` / `inset`），或用无边框子卡做双栏（如 `split`）。
- **副标题**：传入 `subtitle` 时，标题区上下堆叠（meta 行在上，标题在下）。

##### 内置主题（按外观）

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

##### 主题系统概览

主题配置拆成两部分：

1. **结构 token**：圆角、字号、间距、是否显示顶栏色带（`accentBar`）、`css` 等，决定布局骨架。
2. **色板**：由主色 `color` 经 `createThemeColors(color, overrides)` 派生（边框、面板、glow、hover 等），可用主题扁平色字段或实例 `colors` 覆盖。

解析顺序（简化）：

1. `theme`（或全局 `defaultTheme`）取出主题配置。
2. 若实例 `color` 与主题注册色不同 → 丢弃主题里写死的色板字段，按新主色重算。
3. `createThemeColors`：主题上可为**函数**，或 **`card.createThemeColors` 注册表中的字符串名**；未配置则用默认实现。
4. 合并 `colors` / 主题扁平色字段为 overrides。
5. 写入 `--card-*` CSS 变量；若主题有 `css`，挂载到 `[data-card-theme="name"]`。

##### 换色（同一结构，换主色）

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

##### 自定义色板算法

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

##### 用 `preset()` 注册自定义主题

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

##### 色板字段（`colors` / 主题扁平色 / `createThemeColors` 返回值）

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

##### CSS 变量与 `data-slot`

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

##### 静态方法 / 属性

| 名称                                       | 说明                              |
| ------------------------------------------ | --------------------------------- |
| `Card.themes`                              | 当前已注册主题配置（只读 getter） |
| `Card.createTheme(displayName, themeName)` | 创建绑定某主题的快捷组件          |
| `Card.createThemeColors(color, overrides)` | 由主色派生色板（默认算法）        |
| `Card.resolveCreateThemeColors(value)`     | 解析主题上的函数或注册表字符串名  |
| `Card.Ribbon`                              | 绑定 `ribbon` 的快捷组件          |

包级导出：`preset`、`globalParams`、`createThemeColors`、`resolveCreateThemeColors`、`THEME_COLOR_KEYS`、`CardRibbon`（即 `Card.Ribbon`）。

`globalParams.card.createThemeColors` 为算法注册表（内置含 `inset` / `halo` / `split`）；经 `preset({ card: { createThemeColors: { ... } } })` 合并。

#### Zsh

终端窗口组件，模拟 macOS 终端样式，支持自定义标题和内容。

##### 属性

| 属性      | 类型      | 默认值       | 描述                                        |
| --------- | --------- | ------------ | ------------------------------------------- |
| className | string    | -            | 自定义类名                                  |
| title     | string    | '终端 — zsh' | 终端标题                                    |
| children  | ReactNode | -            | 终端内容                                    |
| padding   | string    | '32px'       | 内边距（通过 CSS 变量 --zsh-padding 控制）  |
| radius    | string    | '12px'       | 圆角大小（通过 CSS 变量 --zsh-radius 控制） |
| border    | boolean   | true         | 是否显示边框                                |
| style     | object    | -            | 自定义样式对象                              |

#### ColorfulCard

多彩渐变卡片组件，支持多种预设颜色和自定义样式，具有精美的光晕效果和平滑的悬停动画。

##### 属性

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

#### GlassCard

毛玻璃效果卡片组件，使用 CSS backdrop-filter 实现透明模糊效果。

##### 属性

| 属性      | 类型   | 默认值 | 描述       |
| --------- | ------ | ------ | ---------- |
| className | string | -      | 自定义类名 |
| radius    | string | '12px' | 圆角大小   |

#### Jelly

弹性方块组件，支持自定义颜色、尺寸和圆角，提供多种预设配色。

##### 属性

| 属性         | 类型   | 默认值       | 描述                        |
| ------------ | ------ | ------------ | --------------------------- |
| className    | string | -            | 自定义类名                  |
| size         | string | '60px'       | 方块尺寸                    |
| width        | string | -            | 方块宽度（优先级高于 size） |
| borderRadius | string | '18px'       | 圆角大小                    |
| color        | string | Jelly.Purple | 主题颜色                    |

#### Result

结果展示组件，用于显示操作结果、状态提示等信息，支持自定义图标和颜色。

##### 属性

| 属性        | 类型      | 默认值    | 描述             |
| ----------- | --------- | --------- | ---------------- |
| className   | string    | -         | 自定义类名       |
| title       | ReactNode | -         | 标题             |
| icon        | ReactNode | -         | 图标             |
| description | ReactNode | -         | 描述文字         |
| color       | string    | '#10b981' | 主题颜色         |
| children    | ReactNode | -         | 底部操作区域内容 |

##### 快捷组件

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

#### HeaderCard

头部卡片组件，支持主题色、副标题、标题、描述、额外内容等，适用于页面头部、资源目录、组件市场等场景。根据传入的颜色自动计算衍生颜色，生成协调的视觉效果。

##### 属性

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

#### AuroraCard

极光流光激活容器组件，使用流动彩边、呼吸光晕和玻璃质感模拟激活态视觉效果。

##### 属性

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

#### StackCard

层叠卡片容器组件，可包裹其他 Card 类组件，在背后生成层叠视觉效果。

##### 属性

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

#### PersonalCard

个人档案卡片组件，支持大模式、纵向和横向三种展示模式，用于展示人员信息。

#### ResultCard

简约结果卡片组件，用于显示操作结果、状态提示等信息，支持底部信息列表。

##### 属性

| 属性        | 类型      | 默认值    | 描述                                                                               |
| ----------- | --------- | --------- | ---------------------------------------------------------------------------------- |
| className   | string    | -         | 自定义类名                                                                         |
| title       | ReactNode | -         | 标题                                                                               |
| icon        | ReactNode | -         | 图标                                                                               |
| description | ReactNode | -         | 描述文字                                                                           |
| color       | string    | '#07c160' | 主题颜色                                                                           |
| items       | array     | []        | 底部信息列表，格式为 [{ icon, label, value }]，icon 支持内置名称或自定义 ReactNode |
| children    | ReactNode | -         | 底部操作区域内容                                                                   |

##### items 子项属性

| 属性  | 类型                | 默认值 | 描述                                                     |
| ----- | ------------------- | ------ | -------------------------------------------------------- |
| icon  | string \| ReactNode | -      | 图标，内置名称：'briefcase'、'clock'，或自定义 ReactNode |
| label | string              | -      | 标签名                                                   |
| value | ReactNode           | -      | 值                                                       |

##### 快捷组件

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

#### PersonalCard

个人档案卡片组件，支持大模式、纵向和横向三种展示模式，用于展示人员信息。

##### 属性

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

#### defaultColors

默认颜色配置对象，包含一组预设的颜色值，用于组件库中各组件的配色方案。

##### 颜色列表

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

#### withColors

高阶函数，用于将默认颜色绑定到目标组件上。调用后，目标组件会获得：

- `Colors` 属性：包含所有预设颜色的对象
- 各个颜色名称的直接属性（如 `Purple`、`Orange` 等）

##### 用法示例

```javascript
import { withColors } from '@kne/react-box';

// 将颜色绑定到组件
withColors(MyComponent);

// 使用颜色
MyComponent.Purple; // '#9333ea'
MyComponent.Colors; // { Purple: '#9333ea', Orange: '#fb923c', ... }
```

<!--END_SECTION:DOC_MD-->
