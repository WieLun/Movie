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
