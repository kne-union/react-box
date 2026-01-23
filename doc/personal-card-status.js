const { PersonalCard } = _ReactBox;
const { Flex, Select } = antd;
const { useState } = React;

const BaseExample = () => {
  const [status, setStatus] = useState('online');

  return (
    <Flex vertical gap={24} style={{ padding: '40px', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span>状态:</span>
        <Select
          value={status}
          onChange={setStatus}
          style={{ width: 120 }}
          options={[
            { label: '在线', value: 'online' },
            { label: '离线', value: 'offline' },
            { label: '忙碌', value: 'busy' }
          ]}
        />
      </div>

      <PersonalCard
        avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
        name="莎拉·詹金斯"
        title="高级账户战略师"
        description="我的使命是确保您的团队拥有轻松扩展所需的资源和战略指导。让我们携手共创辉煌。"
        phone="+86 138 0000 0000"
        email="sarah.j@example.com"
        moreInfo={[
          { label: '性别', content: '女' },
          { label: '年龄', content: '32' },
          { label: '部门', content: '账户管理' },
          { label: '职位', content: '高级账户战略师' }
        ]}
        status={status}
        mode="large"
      />
    </Flex>
  );
};

render(<BaseExample />);
