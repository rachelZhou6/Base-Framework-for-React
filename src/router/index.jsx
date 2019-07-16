import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 按路由拆分代码
import Loadable from 'react-loadable';

// loading component
import ComponentLoading from '@/components/Loading';

const Test = Loadable({
    loader: () => import('@/pages/Test'),
    loading: ComponentLoading
});

const Test2 = Loadable({
    loader: () => import('@/pages/Test2'),
    loading: ComponentLoading
});

class RouteMap extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div className="Container">
          <Switch>
            <Route path="/test" component={Test}/>
            <Route path="/test2" component={Test2}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouteMap;
