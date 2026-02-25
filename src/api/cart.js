import request from '@/utils/request'
export const addCartAPI = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const getCartListAPI = () => {
  return request.get('/cart/list')
}

export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 删除购物车
export const delSelectAPI = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}