import React from 'react';
import ReactDOM from 'react-dom';

// mock
import '@/mock';

// style
import '@/assets/style';

// 路由配置
import RouteMap from '@/router';

ReactDOM.render(
  <RouteMap/>,
  document.getElementById('root')
);
