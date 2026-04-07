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
