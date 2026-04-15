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
