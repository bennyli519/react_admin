import React, { useState } from "react";
import { Layout } from "antd";

import "./BasicLayout.scss";
import { MenuDefault, Footer, Header } from "src/components";
import Routers from "src/router/homeRouter";

const { Content } = Layout;

const onLogout = () => {};

interface Iprops {
  location: Location;
}

const BasicLayout: React.FC<Iprops> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider className="page-basic">
      <MenuDefault collapsed={collapsed} />
      <Layout className="site-layout">
        <Header
          onLogout={onLogout}
          setColl={(coll) => setCollapsed(coll)}
          collapsed={collapsed}
        />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routers location={props.location} />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;