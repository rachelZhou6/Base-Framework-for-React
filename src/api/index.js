import fetch from '@/utils/fetch';
const qs = require('querystring');

const setContentType = (contentType='application/x-www-form-urlencoded; charset=UTF-8') => {
	fetch.defaults.headers.post['Content-Type'] = contentType
}

const request = (obj, contentType) => {
	setContentType(contentType)
	return fetch(obj)
}

// test
const test = data => request({
  url: '/test',
  method: 'post',
  data: qs.stringify(data)
});

export { test }
