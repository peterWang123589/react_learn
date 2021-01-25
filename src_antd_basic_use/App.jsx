import React, { Component } from 'react'
import { Button } from 'antd';
import { DownloadOutlined , PoweroffOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
export default class App extends Component {
  state = {
    size: 'large',
    loading:false
  };
  sysStart=()=>{
    this.setState({loading:true})
    setTimeout(()=>{
      this.setState({loading:false})
    },1000)
  }
  render() {
    const {size,loading}=this.state
    return (
      <div>
        <Button type="primary" shape="round" icon={<DownloadOutlined  />} size={size}>下载</Button>
        <Button type="primary" loading={loading} onClick={this.sysStart} icon={<PoweroffOutlined />}> 
          Loading
        </Button>
      </div>
    )
  }
}
