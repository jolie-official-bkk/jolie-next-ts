export function camelCase(string: string): string {
  return `${string.charAt(0).toUpperCase()}${string.substring(1)}`;
}
