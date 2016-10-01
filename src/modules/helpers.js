export function log(message, data) {
  console.info(message + (data !== undefined ? ": " + serialize(data) : ""))
}

export function deserialize(data) {
  return JSON.parse(data)
}

export function serialize(data) {
  return JSON.stringify(data)
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
