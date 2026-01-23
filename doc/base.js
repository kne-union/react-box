const { Jelly } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={20}>
      <Flex gap={10} wrap>
        {Object.keys(Jelly.Colors).map(name => {
          return (
            <div key={name}>
              <Jelly color={Jelly.Colors[name]}>{name}</Jelly>
            </div>
          );
        })}
      </Flex>

      <Flex gap={10} wrap>
        {Object.keys(Jelly.Colors).map(name => {
          return (
            <div key={name}>
              <Jelly color={Jelly.Colors[name]} size="80px">
                {name}
              </Jelly>
            </div>
          );
        })}
      </Flex>

      <Flex gap={10} wrap>
        {Object.keys(Jelly.Colors).map(name => {
          return (
            <div key={name}>
              <Jelly color={Jelly.Colors[name]} width="100px" size="80px">
                {name}
              </Jelly>
            </div>
          );
        })}
      </Flex>
    </Flex>
  );
};

render(<BaseExample />);
