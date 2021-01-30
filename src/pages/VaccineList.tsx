
import { useEffect, useState } from 'react'

import DashboardPageLayout from "../layouts/DashBoardPageLayout"
import {  Content, PageContent } from '../components/common'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { Vaccine } from "../store/ducks/repositories/types"
import { Breadcrumb, Modal, Table, Tag, Button } from 'antd'


import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as RepositoriesActions from '../store/ducks/repositories/actions';
import React from 'react'


interface StateProps {
  vaccine: Vaccine[]
  
}

interface DispatchProps {
    loadVaccine(): void
    loadDelete(id: string): void
}
type Props = StateProps & DispatchProps

const VaccineList: React.FunctionComponent<Props> = props => {
const [dataSource, setDataSource] = useState<Vaccine[]>([])
const { vaccine, loadDelete } = props;
  // Component didmount => fetch API 
  useEffect(() => {
    const {loadVaccine} = props;
    loadVaccine();
    setDataSource(vaccine)
  }, [])

  // API Call to edit
  const onEdit = (id: string): void => {
    console.log('Edit record number', id)
  
  }

  // API call to delete
  const onDelete = (id: string): void => {
    Modal.confirm({
        title: 'Xóa Vắc-xin',
        content: 'Bạn có muốn xóa Vắc-xin?',
        okText: 'Vâng, xóa nó',
        cancelText: 'Trở lại',
        onOk: () => {
          // Send Request to delete it 
          // Xóa trên state
          const newDataSource = JSON.parse(JSON.stringify(vaccine))
        const pos = vaccine.findIndex((t: Vaccine) => t.id == id)
        newDataSource.splice(pos, 1)
        setDataSource(newDataSource);
        // gọi API xóa
        loadDelete(id);
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
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cho loại động vật',
      dataIndex: 'raceType',
      key: 'raceType',
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
      render: (_: string, record: Vaccine): JSX.Element => {
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
  


   /**
   * Update this code to show loading spinner when data is being fetched from
   * API
   */
  const loading = false
  
    return (
      <DashboardPageLayout>
        <Content>
        <div className="site-layout-background" style={{}}>
        <PageContent title="Danh sách Vắc-xin" titleDivider>
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
    vaccine: state.repositories.vaccine,
    
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(VaccineList);
