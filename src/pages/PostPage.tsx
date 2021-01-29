
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
    loadPost(): void
}
type Props = StateProps & DispatchProps

const PostPage: React.FunctionComponent<Props> = props => {
  // Component didmount => fetch API 
  useEffect(() => {
    const {loadPost} = props;
    loadPost();
  }, [])
  const { repositories } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'images',
      key: 'images',
      render: (images: string[]): JSX.Element[] => {
        return images&&images.map((c: string) => {
          return (
            <img src={c} key={c} style={{width: 70, height: 70}}>
            </img>
          )
        })
      },
    },
    {
      title: 'Video',
      dataIndex: 'videos',
      key: 'videos',
      render: (videos: string[]): JSX.Element[] => {
        return videos&&videos.map((c: string) => {
          return (
            <video key={c} autoPlay={true} style={{width: 140, height: 140}}>
                <source src={c} />
        </video>
          )
        })
      },
    },
    {
      title: 'Ngày đăng bài',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
        title: 'Lượt thích',
        dataIndex: 'like',
        key: 'like',
      },
      {
        title: 'Lượt chia sẽ',
        dataIndex: 'share',
        key: 'share',
      },
   
  ]

  console.log(repositories);
  


   /**
   * Update this code to show loading spinner when data is being fetched from
   * API
   */
  const loading = false
  
    return (
      <DashboardPageLayout>
        <Content>
        <div className="site-layout-background" style={{}}>
        <PageContent title="Danh sách bài viết" titleDivider>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
