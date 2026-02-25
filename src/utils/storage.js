//用户信息持久化处理封装
const INFO_USER = 'storage_user_info'

export const getInfo = () => {
  return JSON.parse(localStorage.getItem(INFO_USER)) || { userInfo: '', token: '' }
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_USER, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_USER)
}

//搜索历史持久化处理封装
const SEARCH_KEY = 'storage_search_key'

export const getSearchList = () => {
  return JSON.parse(localStorage.getItem(SEARCH_KEY)) || []
}

export const setSearchList = (arr) => {
  localStorage.setItem(SEARCH_KEY, JSON.stringify(arr))
}