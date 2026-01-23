const { Result } = _ReactBox;
const { Flex, Button } = antd;
const { CheckOutlined } = icons;

const BaseExample = () => {
  return (
    <Result icon={<CheckOutlined />} title="Onboarding Successful!" description="Welcome to the platform. Your workspace is ready and waiting for your first project.">
      <Button type="primary" size="large" shape="round">
        Enter Dashboard
      </Button>
    </Result>
  );
};

render(<BaseExample />);
