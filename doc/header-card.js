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
              subtitle={`${name} 主题`}
              title={`${name} HeaderCard`}
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
                    background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`,
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
