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

      <h3>带图标</h3>
      <Flex gap={16} wrap="wrap">
        <Jelly color={Jelly.Purple} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Red} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Blue} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Green} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </Jelly>
        <Jelly color={Jelly.Orange} size="80px">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </Jelly>
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
