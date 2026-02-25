import request from '@/utils/request'

export const getGoodsListAPI = (goodsInfo) => {
  // console.log(goodsInfo.categoryId);
  return request.get('/goods/list', goodsInfo)
}

// 获取分类数据
export const getCategoryData = () => {
  return request.get('/category/list')
}