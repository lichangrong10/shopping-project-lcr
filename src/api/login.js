import instance from '@/utils/request'

export const getBaseImg = () => {
  return instance.get('/captcha/image')
}

export const getMsgCodeAPI = (form) => {
  return instance({
    url: 'captcha/sendSmsCaptcha',
    method: 'POST',
    params: {
      form
    }
  })
}

export const codeLogin = (mobile, smsCode) => {
  return instance.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}