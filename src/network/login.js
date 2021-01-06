import request from './request';

// 轮播图
export function login(userInfo,checked) {
  return request({
    url: '/api/v2/admin/login',
    method: 'post',
    // contentType:"application/json;charset=utf-8",
    // dataType:"json"
    data: JSON.stringify({'data': {userInfo,checked}, 'status': 0})
  });
}
