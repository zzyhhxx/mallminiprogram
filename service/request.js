import {baseUrl} from "./config.js"

export default function(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      data: options.data,
      method:'GET',
      success:resolve,
      fail: err => {
        reject(err)
      }
    })
  })
 
}