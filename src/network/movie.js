import request from "./request";

export function uploadMovieInfo(data) {
  return request({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "/api/v2/admin/movie/add",
    method: "post",
    data: data,
  });
}

export function getTagInfo() {
  return request({
    url: "/api/v2/admin/movie/add",
    method: "get",
  });
}

export function uploadMovieFile(data) {
  return request({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "/api/v2/admin/movie/moviefile",
    method: "post",
    data: data,
  });
}

export function movieInfo(currentPage, pageSize, searchVal) {
  return request({
    url: "/api/v2/admin/movie/list",
    method: "get",
    params: {
      currentPage,
      pageSize,
      searchVal
    }
  });
}

export function movieDel(id) {
  return request({
    url: "/api/v2/admin/movie/del",
    method: "get",
    params: {
      id
    }
  });
}