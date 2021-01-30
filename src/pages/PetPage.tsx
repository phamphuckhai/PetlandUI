
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
    loadPet(): void
}
type Props = StateProps & DispatchProps

const PetPage: React.FunctionComponent<Props> = props => {
  // Component didmount => fetch API 
  useEffect(() => {
    const {loadPet} = props;
    loadPet();
  }, []);
  const { repositories } = props;

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sinh nhật',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Giống',
      dataIndex: 'race',
      key: 'race',
      render: (race: any)=>{return race?race.name:''}

     
    },
    {
        title: '"Sen"',
        dataIndex: 'user.name',
        key: 'user.nam',
      },
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (image: string) => {
            return (
              <img src={image} key={image} style={{width: 70, height: 70}}>
              </img>
            )
        },
      },
   
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
        <PageContent title="Danh sách thú cưng" titleDivider>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(PetPage);
