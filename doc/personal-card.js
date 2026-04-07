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

const BaseExample = () => {
  const [mode, setMode] = useState('large');
  const [status, setStatus] = useState('online');

  const profileCards = useMemo(
    () => [
      {
        key: 'full',
        label: '完整信息',
        badge: '推荐',
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

  return (
    <Flex vertical gap={32} style={{ padding: '40px' }}>
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

      <Flex wrap gap={24} justify="center">
        {profileCards.map(item => (
          <div key={item.key} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <Tag color="blue">{item.label}</Tag>
            <PersonalCard avatar={avatar} mode={mode} status={status} {...item} />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);
