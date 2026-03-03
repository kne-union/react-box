const { Zsh } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={16}>
      <Zsh title="终端 — zsh">
        <div style={{ color: '#1f2937' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: '#22c55e', fontWeight: 'bold' }}>➜</span>
            <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>~</span>
            <span>npm init @kne/union-app my-dashboard</span>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#0052D9' }}>ℹ</span> 正在初始化 KNE Union 应用...
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', paddingLeft: '1.5rem' }}>v3.0.0</p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#22c55e' }}>✔</span> 模板已下载
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#22c55e' }}>✔</span> 依赖已解析
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#22c55e' }}>✔</span> 配置已生成
            </p>
          </div>
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '0.75rem', 
            backgroundColor: '#f0fdf4', 
            borderRadius: '8px', 
            border: '1px solid #dcfce7',
            color: '#15803d',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            <p style={{ margin: 0 }}>成功！项目已创建于 ./my-dashboard</p>
          </div>
        </div>
      </Zsh>

      <Zsh title="终端 — bash" padding="24px" radius="8px">
        <div style={{ color: '#1f2937' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: '#22c55e', fontWeight: 'bold' }}>$</span>
            <span>ls -la</span>
          </div>
          <div style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
            <p>total 48</p>
            <p>drwxr-xr-x  12 user  staff   384 Mar  3 10:30 .</p>
            <p>drwxr-xr-x   6 user  staff   192 Mar  3 09:15 ..</p>
            <p>-rw-r--r--   1 user  staff  1024 Mar  3 10:30 README.md</p>
          </div>
        </div>
      </Zsh>
    </Flex>
  );
};

render(<BaseExample />);
