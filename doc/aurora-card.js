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
