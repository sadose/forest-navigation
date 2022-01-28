export function clamp(number: number, lower: number, upper: number): number {
  return number > upper ? upper : number < lower ? lower : number;
}

export function adjustPos<T>(arr: T[], i: number, j: number): T[] {
  if (i === j || i < 0 || j >= arr.length) return arr;
  let r: T[] = arr.slice(0);
  const t: T = r[i];
  r.splice(i, 1);
  r.splice(j, 0, t);
  return r;
}
