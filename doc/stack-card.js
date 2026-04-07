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
