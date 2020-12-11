const BASE_URL = process.env.NODE_ENV == 'development' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'

const CHECK_LOGIN = "/api/user/check_login";

const GETHOME = "/index-infos";

const LOGIN = "/user/login";

const REGISTOR = "/user/register";

const GETCATEGORY = "/categories"

export default {
  BASE_URL,
  CHECK_LOGIN,
  REGISTOR,
  GETHOME,
  LOGIN,
  GETCATEGORY
}