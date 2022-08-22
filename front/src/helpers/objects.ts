export function objectsEquals(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}