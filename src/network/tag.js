import request from "./request";

export function tagAdd(data) {
  return request({
    url: "/api/v2/admin/tag/add",
    method: "post",
    data: data,
  });
}

export function tagList(id, page, name) {
  return request({
    url: "/api/v2/admin/tag/list",
    method: "get",
    params: {
      id,
      page,
      name,
    },
  });
}

export function tagDel(name) {
  return request({
    url: "/api/v2/admin/tag/del",
    method: "get",
    params: {
      name,
    },
  });
}

export function tagEdit(oldTagName, newTagName) {
  return request({
    url: "/api/v2/admin/tag/edit",
    method: "get",
    params: {
      oldTagName,
      newTagName,
    },
  });
}
