import request from './request';

// 轮播图
export function login(userInfo) {
  return request({
    url: '/api/v2/admin/login',
    method: 'post',
    data: JSON.stringify({userInfo})
  });
}
