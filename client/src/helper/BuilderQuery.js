function builderQuery(object) {
  if (typeof object !== 'object') {
    throw new Error('Invalid input column builder');
  }
  if (Object.entries(object).length === 0) {
    return '';
  }
  const keys = Object.keys(object);
  let column = '';
  column = keys
    .filter((key) => {
      if (object[key] === '' || object[key] === null || object[key] === false) {
        return '';
      }
      return key;
    })
    .map((key) => `${key}=${object[key]}`)
    .join('&');
  const result = `&${column}`;
  return result;
}

export default builderQuery;
