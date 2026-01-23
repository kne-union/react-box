const { Jelly } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={24} style={{ padding: '40px', alignItems: 'center' }}>
      <h3>不同颜色</h3>
      <Flex gap={16} wrap="wrap">
        <Jelly color={Jelly.Purple} />
        <Jelly color={Jelly.Orange} />
        <Jelly color={Jelly.Blue} />
        <Jelly color={Jelly.Pink} />
        <Jelly color={Jelly.Green} />
        <Jelly color={Jelly.Yellow} />
        <Jelly color={Jelly.Red} />
        <Jelly color={Jelly.Gray} />
        <Jelly color={Jelly.Black} />
      </Flex>

      <h3>不同尺寸</h3>
      <Flex gap={16} align="center">
        <Jelly size="40px" color={Jelly.Purple} />
        <Jelly size="60px" color={Jelly.Blue} />
        <Jelly size="80px" color={Jelly.Green} />
        <Jelly size="100px" color={Jelly.Orange} />
      </Flex>

      <h3>不同宽度</h3>
      <Flex vertical gap={16} align="center">
        <Jelly width="100px" color={Jelly.Pink} />
        <Jelly width="200px" color={Jelly.Red} />
        <Jelly width="300px" color={Jelly.Yellow} />
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);
