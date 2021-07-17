import request from "./request"

export function getMultidata() {
  return request({
    url:"",
    data:{
      multidata: '1'
    }
  })
}
export function getGoodsList(options) {
  return request({
    url:"",
    data: {
      type: options.type,
      page: options.page
    }
  })
}