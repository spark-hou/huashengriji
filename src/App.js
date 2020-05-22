import React, {Component, Suspense} from 'react';
import './App.css';
import routerList from '@/router/index';
import 'antd/dist/antd.css';
import Loading from '@/component/loading/loading';


import {withRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {
    console.log('version--2020.05.22');
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<Loading/>}>
          <Switch>
            {
              routerList.map((item, index) =>
                <Route key={index}
                  path={item.path}
                  render={() => <item.component {...this.props}
                    route={[...item.child]}/>}
                />
              )
            }
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);
