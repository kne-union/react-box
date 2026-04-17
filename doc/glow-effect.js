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
