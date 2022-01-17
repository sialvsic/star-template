import qs from "querystring";

function parseUrl(params: string) {
  return qs.parse(params);
}

export { parseUrl };
