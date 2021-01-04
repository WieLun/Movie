import request from './request';

// 轮播图
export function getBanners() {
  return request({
    url: '/banner',
    method: 'get'
  });
}

export function getMusicList({ limit = 10 } = {}) {
  return request({
    url: '/personalized',
    method: 'get',
    params: {
      limit
    }
  });
}