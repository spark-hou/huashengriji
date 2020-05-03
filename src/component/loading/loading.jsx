/**
 * @author  sparkHou
 * @date 2020-04-30 15:50
 * @Description:
 */
import React, {Component} from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import './loading.scss';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loading">
        <LoadingOutlined className="icon"/>
      </div>
    );
  }

}

export default Loading;
