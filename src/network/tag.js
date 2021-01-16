import request from './request';

export function tagAdd(data) {
  return request({
    url: '/api/v2/admin/tag/add',
    method: 'post',
    data: data
  });
}