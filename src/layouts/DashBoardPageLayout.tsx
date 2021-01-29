import React from 'react';



import { Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, MessageOutlined , NotificationOutlined } from '@ant-design/icons';
import styled from 'styled-components'


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


type CommonLayoutProps = {
    children: React.ReactNode
}

const  DashboardPageLayout: React.FunctionComponent<CommonLayoutProps> = ({ children }) => { 
    
  
  return (
        <DashboardLayout >
      <Layout style={{fontSize: 16 }}>
    <Header className="header">
      <img className="logo" src='petland.png' style={{height:60, padding: '0 50px'}}/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0'}}>
        <Breadcrumb.Item >
        <h1 style={{padding: '0 30px', fontSize: 30}}>Trang chủ</h1>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '0 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="sub1" icon={<UserOutlined />} title="subnav 1"
            >
              <Link to="/user">User</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<MessageOutlined/>}>
              <Link to="/post">Bài viết</Link>
                </Menu.Item>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <div style={{ padding: '0 24px', minHeight: 280 }}>
        {children}
        </div>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>PetLand@2021</Footer>
  </Layout>
  </DashboardLayout>
    );
}

const DashboardLayout = styled(Layout)`
  min-height: 100vh;
`

export default DashboardPageLayout