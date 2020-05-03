/**
 * @author  sparkHou
 * @date 2020-04-23 13:18
 * @Description:
 */
import React, {Component} from 'react';
import './index.scss';
import {Menu, Affix, Button, Form, Input} from 'antd';
import 'animate.css';
import {WOW} from 'wowjs';
import Canvas from '@/component/canvas/canvas';
import $ from 'jquery';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuColor: false,
      code: '8TZ3GXO',
      form: ''
    };
  }

  componentDidMount() {
    new WOW().init();
  }

  onChange = (val) => {
    this.setState({menuColor: val});
  };
  scrollToAnchor = (anchorName) => {

    if (anchorName) {
      $('html,body').animate({scrollTop: ($(`#${anchorName}`).offset().top)},500);
    }
  };

  render() {
    return (
      <div className="index">
        <div className="firstPage page"
          id="1">
          <Affix className="affix"
            offsetTop={0}
            onChange={this.onChange}
          >
            <div className="guide g-container"
              style={{backgroundColor: this.state.menuColor ? '#212121' : '#786DE4'}}
            >
              <img alt="花生日记"
                className="titleImg"
                src={[require('@/asset/img/site-header-logo.png')]}
              />
              <div className="topMenu">
                <Menu className="menu"
                  mode="horizontal">
                  <Menu.Item key="first"><span onClick={() => this.scrollToAnchor('1')}>首页</span> </Menu.Item>
                  <Menu.Item key="second"
                    onClick={() => this.scrollToAnchor('2')}>注册</Menu.Item>
                  <Menu.Item key="third"
                    onClick={() => this.scrollToAnchor('3')}>APP下载</Menu.Item>
                  <Menu.Item key="fourth"
                    onClick={() => this.scrollToAnchor('4')}>微信联系</Menu.Item>
                  <Menu.Item key="fifth"
                    onClick={() => this.scrollToAnchor('5')}>联系我们</Menu.Item>
                </Menu>
              </div>
            </div>
          </Affix>
          <Canvas className="canvas"/>
          <div className="content">
            <div className="left wow slideInLeft">
              <span>花生日记App</span>
              <span>发现隐藏优惠券</span>
              <span>不仅省钱，还生钱</span>
              <span>
                <img alt=""
                  src={[require('@/asset/img/download.jpg')]}/>
              </span>
              <span>APP扫邀请码</span>
              <span>免费提供培训</span>
              <span>新人扶持奖励</span>
              <span>邀请码：{this.state.code}</span>
              <i>注册后扫描右图加客服微信，告知手机号后四位</i>
              <i>导师赠送超级会员、给予扶持奖励、并免费提供培训资料</i>
              <div>
                <Button
                  onClick={() => {
                    window.open('https://a.app.qq.com/o/simple.jsp?pkgname=com.jf.lkrj');
                  }}
                  type="primary">安卓下载通道</Button>
                <Button danger
                  onClick={() => {
                    window.open('https://apps.apple.com/cn/app/%E8%8A%B1%E7%94%9F%E6%97%A5%E8%AE%B0/id1390240947');
                  }}
                  type="primary">苹果下载通道</Button>

              </div>
            </div>
            <div className="right wow slideInRight">
              <img alt="花生日记"
                src={[require('@/asset/img/one.png')]}/>
            </div>
          </div>
        </div>
        <div className="secondPage page"
          id="2">
          <div className="left wow slideInLeft">
            <div className="title">
              花生日记注册流程
            </div>
            <div>
              请用正版 免费邀请码 {this.state.code}，您的权益有保障！
            </div>
            <div>
              <img alt=""
                src={[require('@/asset/img/chat.png')]}/>苹果手机，请先打开App Store，搜索 花生日记，安装后输入{this.state.code}邀请码即可
            </div>
            <div>
              <img alt=""
                src={[require('@/asset/img/pencil.png')]}/>安卓手机：手机应用市场搜索 花生日记 下载安装后输入{this.state.code}邀请码即可
            </div>
            <div>
              <img alt=""
                src={[require('@/asset/img/skull.png')]}/>小贴士揭秘：
              <span style={{color: '#ec5298'}}>扫描本站二维码下载更方便快捷哦。</span>
            </div>
            <br/>
            <div>
              <Button shape="round"
                size="middle"
                type="primary">高速下载通道</Button>
            </div>
          </div>
          <div className="right wow slideInRight">
            <img alt=""
              src={[require('@/asset/img/brief-1.png')]}/>
          </div>
        </div>
        <div className="thirdPage page"
          id="3">
          <div className="left wow slideInLeft">
            <img alt=""
              src={[require('@/asset/img/brief-2.png')]}/>
          </div>
          <div className="right wow slideInRight">
            <div className="title">花生日记是什么？</div>
            <div>
              什么是花生日记？<br/>
              花生日记是一款社交分享智能导购APP，由广州花生日记网络科技有限公司开发 <br/>
              新版的花生日记增加了外卖点餐、社区团购、车主服务、美食旅行、本地生活，花生直邮、花粉社区、飞猪机票、线上教育等服务。
            </div>
            <br/>
            <div>
              本站导师经常培训使用技巧，带大家一起使用奖励生钱，只能在淘宝APP复制标题反向查找？技巧多着呢，嘿嘿，我们将不断地更新优化花生日记app的使用方法
            </div>
          </div>
        </div>
        <div className="fourthPage page"
          id="4">
          <div className="title">
            快来下载使用吧！
          </div>
          <div className="img">
            <img alt=""
              src={[require('@/asset/img/brief-3.png')]}/>
          </div>
          <div className="btnGroup">
            <Button
              onClick={() => {
                window.open('https://a.app.qq.com/o/simple.jsp?pkgname=com.jf.lkrj');
              }}
              size="large"
              type="primary">安卓下载通道</Button>
            <Button danger
              onClick={() => {
                window.open('https://apps.apple.com/cn/app/%E8%8A%B1%E7%94%9F%E6%97%A5%E8%AE%B0/id1390240947');
              }}

              size="large"
              type="primary">苹果下载通道</Button>
          </div>
        </div>
        <div className="fifthPage page"
          id="5">
          <div className="title">
            联系我们
          </div>
          <div className="title-2">
            任何使用问题，团队建设问题，运营商如何加入问题，可以咨询我们客服微信:a14436173
          </div>
          <div className="content">
            <div className="left">
              <div>扫码加客服微信</div>
              <img alt=""
                src={[require('@/asset/img/qr.jpg')]}/>
            </div>
            <div className="right">
              <Form
                form={this.state.form}
                layout="horizontal"
              >

                <Form.Item label="你的名字">
                  <Input/>
                </Form.Item>
                <Form.Item label="联系方式">
                  <Input/>
                </Form.Item>
                <Form.Item label="您的意见">
                  <Input.TextArea/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">发送</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Index;
