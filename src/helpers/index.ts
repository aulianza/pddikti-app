export const toCamelCase = (str: string) => {
  const string = str.toLowerCase();
  return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

}