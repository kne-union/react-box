const { Result } = _ReactBox;
const { Flex, Button } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={48} style={{ padding: '24px 0' }}>
      <Result.Success title="操作成功" description="数据已保存，您可以继续下一步操作。">
        <Button type="primary" size="large" shape="round">
          查看详情
        </Button>
      </Result.Success>

      <Flex wrap gap={32} justify="center">
        <Result.Warning title="注意风险" description="当前配置尚未完全生效，请确认后再提交。" />
        <Result.Error title="提交失败" description="网络请求超时，请稍后重试。" />
        <Result.Info title="提示信息" description="您可以先完成基础设置，再进行高级配置。" />
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);
