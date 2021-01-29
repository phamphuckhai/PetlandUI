
import { useEffect } from 'react'

import DashboardPageLayout from "../layouts/DashBoardPageLayout"
import {  Content, PageContent } from '../components/common'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { Repository } from "../store/ducks/repositories/types"
import { Breadcrumb, Modal, Table, Tag, Button } from 'antd'


import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as RepositoriesActions from '../store/ducks/repositories/actions';


interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}
type Props = StateProps & DispatchProps

const UserPage: React.FunctionComponent<Props> = props => {
  // Component didmount => fetch API 
  useEffect(() => {
    const {loadRequest} = props;
    loadRequest();
  }, [])
  const { repositories } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Ngày đăng kí tài khoản',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Số người theo dỗi',
      dataIndex: 'follows',
      key: 'follows',
      render: (follows: string[])=>{return follows.length}
    }
  ]



   /**
   * Update this code to show loading spinner when data is being fetched from
   * API
   */
  const loading = false
  
    return (
      <DashboardPageLayout>
        <Content>
        <div className="site-layout-background" style={{}}>
        <PageContent title="Danh sách người dùng" titleDivider>
          {loading && (
            <div style={{ textAlign: 'center' }}>
              <LoadingOutlined />{' '}
            </div>
          )}
          {!loading && <Table dataSource={repositories} columns={columns} />}
        </PageContent>
        </div>
        </Content>
      </DashboardPageLayout>
    )
  }

  const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
