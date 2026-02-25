import { getCartListAPI, changeCount, delSelectAPI } from '@/api/cart'
import { Toast } from 'vant'
export default {
  namespaced: true,
  //数据
  state: {
    cartList: []
  },
  //同步操作（用于更改state中的数据）
  mutations: {
    setCartList(state, newList) {
      state.cartList = newList
    },
    toggleChecked(state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      if (goods) {
        goods.isChecked = !goods.isChecked
        // console.log(goods.isChecked);
      }
    },
    allChecked(state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    updateCartNum(state, { goodsId, goodsNum }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      if (goods) {
        goods.goods_num = goodsNum
      }
    }
  },
  //异步操作
  actions: {
    //调用actions里的方法
    //context.dispatch('getCartList' , '参数') 
    //调用mutations里的方法
    //  context.commit('setCartList' , '参数')
    async getCartList(context) {
      const res = await getCartListAPI()
      res.data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', res.data.list)
    },
    async updateCartNum(context, { goodsId, goodsNum, goodsSkuId }) {
      // console.log(goodsId, goodsNum, goodsSkuId);
      const res = await changeCount(goodsId, goodsNum, goodsSkuId)
      context.commit('updateCartNum', { goodsId, goodsNum })
    },
    async delSelect(context, cartIds) {
      await delSelectAPI(cartIds)
      context.dispatch("getCartList")
      Toast('删除成功')
    }
  },
  //计算属性
  getters: {
    // 选中的商品总数
    selGoodsCount(state, getters) {
      return getters.selGoodsList.reduce((total, item) => total + item.goods_num, 0)
    },
    // 商品总数
    goodsCount(state) {
      return state.cartList.reduce((total, item) => total + item.goods_num, 0)
    },
    // 选中的商品列表
    selGoodsList(state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 选中的总价
    selGoodsTotalPrice(state, getters) {
      return getters.selGoodsList.reduce((total, item) => total + (item.goods_num * item.goods.goods_price_min), 0).toFixed(2)
    },
    //是否全选
    isAllChecked(state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}