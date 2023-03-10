export async function httpGetGeoJsonData() {
  const res = await fetch(`/geo`, {
    method: "get",
  });
  const data = await JSON.stringify(res);
  return data;
}
