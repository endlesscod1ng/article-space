type Mods = Record<string, boolean | undefined | string>;
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, v]) => Boolean(v))
      .map(([k, _]) => k),
  ].join(" ");
}
// 
