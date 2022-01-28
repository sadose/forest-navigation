export default function getScreenWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
