import ajax, {api} from "./index";

export async function checkLogin() {
  try {
    await ajax.get(api.CHECK_LOGIN);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}

export function auth(arr = []) {
  return arr.includes("guest");
}
