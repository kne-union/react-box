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
