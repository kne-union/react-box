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
        default: `<Card theme="${themeName}" />`,
        ...(swatchColor ? { recolor: `<Card theme="${themeName}" color="${swatchColor}" />` } : null)
      },
      palette: {
        default: paletteSnapshot(defaultPalette),
        ...(swatchPalette ? { [`color ${swatchColor}`]: paletteSnapshot(swatchPalette) } : null)
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
        <div style={{ flex: `0 1 ${previewMaxWidth}px`, width: '100%', maxWidth: previewMaxWidth }}>{children}</div>
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
