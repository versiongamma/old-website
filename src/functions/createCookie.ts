export default function createCookie(id: string, value: string, days: number = 365) {
  let now = new Date();
  let time = now.getTime() + days * 86400000;
  now.setTime(time);
  document.cookie = `${id}=${value} ${days === 0 ? '' : `; expires=${now.toUTCString()}`}`
}