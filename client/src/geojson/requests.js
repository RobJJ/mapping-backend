export async function httpGetGeoJsonData() {
  const res = await fetch(`/geo`, {
    method: "get",
  });
  return await res.json();
}
