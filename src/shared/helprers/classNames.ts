type Mods = Record<string, boolean | undefined | string>;
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([k, v]) => Boolean(v))
      .map(([k, v]) => k),
  ].join(" ");
}
// classNames("1", { "2": true, "3": true, "4": false }, ["555", "666", "777"]);
