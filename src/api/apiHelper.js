
function getHeaders(isRemoveAuthorize) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (isRemoveAuthorize == true) {
      headers.append("Authorization", "Bearer xx");
    }

    return headers;
}

export default function getRequest(options) {

  let headers = getHeaders(options.isRemoveAuthorize);

  let init = {
      method: options.method,
      headers,
      body: options.body};

  return new Request('http://localhost:61469/api/v1/account/token', init);
}
