export async function httpGetGeoJsonData() {
  const res = await fetch("http://localhost:8000/geo", {
    method: "get",
  });
  const data = await res.json();
  return data;
}
