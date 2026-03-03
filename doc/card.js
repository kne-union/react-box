const { Card } = _ReactBox;
const { Flex, Space, Button } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={16}>
      <Card
        title="大尺寸卡片"
        icon="📊"
        size="large"
        extra={<a href="#">查看更多</a>}
      >
        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          大尺寸卡片，padding: 32px，标题更大
        </div>
      </Card>

      <Card
        title="默认尺寸卡片"
        icon="📊"
        extra={<a href="#">查看更多</a>}
      >
        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          这是卡片内容区域
        </div>
      </Card>

      <Card
        title="小尺寸卡片"
        icon="📊"
        size="small"
        extra={<a href="#">查看更多</a>}
      >
        <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
          小尺寸卡片，padding: 16px，标题更小
        </div>
      </Card>

      <Card
        title="自定义样式"
        icon="🎨"
        padding="32px"
        radius="16px"
        style={{ borderLeft: '4px solid #741ce9' }}
      >
        <p style={{ margin: 0, color: '#475569' }}>
          通过 padding、radius 和 style 属性自定义卡片样式
        </p>
      </Card>

      <Card
        title="无边框卡片"
        icon="📄"
        border={false}
        padding="20px"
      >
        <p style={{ margin: 0, color: '#475569' }}>
          设置 border=false 可以移除边框，适用于需要自定义背景或嵌入其他容器的场景
        </p>
      </Card>

      <Card
        title="操作按钮"
        icon="⚙️"
        extra={
          <Space>
            <Button type="link" size="small">编辑</Button>
            <Button type="link" size="small">删除</Button>
          </Space>
        }
      >
        <p style={{ margin: 0, color: '#475569' }}>
          在 extra 区域放置操作按钮，实现卡片的交互功能
        </p>
      </Card>

      <Card
        title="图表卡片"
        icon="📈"
        size="large"
      >
        <div style={{ 
          height: '200px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#64748b'
        }}>
          图表展示区域
        </div>
      </Card>

      <Card title="简洁卡片" size="small">
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>
          这是一个简洁的卡片，只包含标题和内容区域。适用于不需要额外装饰的场景。
        </p>
      </Card>
    </Flex>
  );
};

render(<BaseExample />);
