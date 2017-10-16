const baseRestUri = REST_API_BASE_URI + '/api/v1/';

function getHeaders(isRemoveAuthorize) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (!isRemoveAuthorize) {
      headers.append("Authorization", "Bearer " + localStorage.getItem('jwtToken'));
    }
    return headers;
}

export default function getRequest(options) {

  let headers = getHeaders(options.isRemoveAuthorize);

  let init = {
      method: options.method,
      headers,
      body: options.body
      };

  return new Request(baseRestUri + options.resource, init);
}
