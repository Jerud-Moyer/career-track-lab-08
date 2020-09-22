module.exports = rawRequest => {
  const [method, path] = rawRequest.split('\n')[0].split(' ');
  const [ ,body] = rawRequest.split(/\r?\n\r?\n/);
  
  if (!body) {
  return {method, path};
  } else {
    return {method, path, body};
  }
};
