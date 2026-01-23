const { PersonalCard } = _ReactBox;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={40} style={{ padding: '40px', alignItems: 'center' }}>
      {/* Large Mode */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0 }}>大模式</h3>
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
          status="online"
          mode="large"
        />
      </div>

      {/* Vertical Mode */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0 }}>纵向模式</h3>
        <PersonalCard
          mode="vertical"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
          name="莎拉·詹金斯"
          title="高级账户战略师"
          description="我的使命是确保您的团队拥有轻松扩展所需的资源和战略指导。"
          phone="+86 138 0000 0000"
          email="sarah.j@example.com"
          moreInfo={[
            { label: '性别', content: '女' },
            { label: '年龄', content: '32' },
            { label: '部门', content: '账户管理' }
          ]}
          status="online"
        />
      </div>

      {/* Horizontal Mode */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0 }}>横向模式</h3>
        <PersonalCard
          mode="horizontal"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLnDmKjqh6t4I7p2ox9cVq2MTqqBKE6BBO49c-FAxX4Y8EwyDik-JP7x_oQctnOedSDTpGgs5-sZLDcuzrBcS766dwWL2cPxo9HvgVxV4-pfMoA9NMMgwTSXXcqpKySJjiaNrL7mkkH2VD_hKBRffEuILfooFtU8q3j9j-9BRYSBv32LitbcfBOcJjlsVniybDF9XC-h5CvNevPbJPTAqsfx1zLXNviJYh50e_TTtk_rEVgTGzls7CWfRW7Od2T7_K5ALkUUzlA"
          name="莎拉·詹金斯"
          title="高级账户战略师"
          description="确保团队拥有轻松扩展所需的资源和战略指导"
          phone="+86 138 0000 0000"
          email="sarah.j@example.com"
          moreInfo={[
            { label: '性别', content: '女' },
            { label: '年龄', content: '32' },
            { label: '部门', content: '账户管理' },
            { label: '职位', content: '高级账户战略师' }
          ]}
          badge="在职"
          status="online"
        />
      </div>
    </Flex>
  );
};

render(<BaseExample />);
