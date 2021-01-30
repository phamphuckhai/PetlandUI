
import { useEffect, useState } from 'react'

import DashboardPageLayout from "../layouts/DashBoardPageLayout"
import {  Content, PageContent } from '../components/common'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import {  Wiki } from "../store/ducks/repositories/types"
import { Breadcrumb, Modal, Table, Tag, Button } from 'antd'


import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as RepositoriesActions from '../store/ducks/repositories/actions';
import React from 'react'


interface StateProps {
  wiki: Wiki[]
  
}

interface DispatchProps {
    loadwiki(): void
    loadDelete(id: string): void
}
type Props = StateProps & DispatchProps

const WikiList: React.FunctionComponent<Props> = props => {
const [dataSource, setDataSource] = useState<Wiki[]>([])
const { wiki, loadDelete } = props;
  // Component didmount => fetch API 
  useEffect(() => {
    const {loadwiki} = props;
    loadwiki();
    if(wiki)
    setDataSource(wiki)
  }, [props.wiki?props.wiki.length:[]])

  // API Call to edit
  const onEdit = (id: string): void => {
    console.log('Edit record number', id)
  
  }

  // API call to delete
  const onDelete = (id: string): void => {
    Modal.confirm({
        title: 'Xóa wiki',
        content: 'Bạn có muốn xóa wiki?',
        okText: 'Vâng, xóa nó',
        cancelText: 'Trở lại',
        onOk: () => {
          // Send Request to delete it 
          // Xóa trên state
        const newDataSource = JSON.parse(JSON.stringify(wiki))
        const pos = wiki.findIndex((t: Wiki) => t.id == id)
        newDataSource.splice(pos, 1)
        setDataSource(newDataSource);
        // gọi API xóa
        // loadDelete(id);
        },
        onCancel: () => {
          /* empty body */
        },
      })
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (image: string) => {
            return (
              <img src={image} key={image} style={{width: 70, height: 70}}>
              </img>
            )
        },
      },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      /* eslint-disable react/display-name */
      render: (_: string, record: Wiki): JSX.Element => {
        return (
          <React.Fragment>
            <Button type="primary" icon={<EditOutlined />} onClick={(): void => onEdit(record.id)}>
              Sửa
            </Button>{' '}
            <Button type="link"  onClick={(): void => onDelete(record.id)} style={{color: 'red'}}>
              Xóa
            </Button>
          </React.Fragment>
        )
      },
    },
   
  ]
  
  console.log("im out",wiki);

   /**
   * Update this code to show loading spinner when data is being fetched from
   * API
   */
  const loading = false
  
    return (
      <DashboardPageLayout>
        <Content>
        <div className="site-layout-background" style={{}}>
        <PageContent title="Danh sách bài viết wiki" titleDivider>
        {loading && (
            <div style={{ textAlign: 'center' }}>
              <LoadingOutlined />{' '}
            </div>
          )}
          {!loading && <Table dataSource={dataSource} columns={columns} />}
        </PageContent>
        </div>
        </Content>
      </DashboardPageLayout>
    )
  }

  const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
    wiki: state.repositories.wiki,
    
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(WikiList);
