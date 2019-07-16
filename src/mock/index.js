import Mock from 'mockjs';

// test
Mock.mock('/test', {
  "code": 200,
  "data": {},
  "message": "操作成功"
})
