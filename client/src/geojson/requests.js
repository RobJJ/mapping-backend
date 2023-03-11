export async function httpGetGeoJsonData() {
  const res = await fetch("http://localhost:8000/geo", {
    method: "get",
  });
  const data = await res.json();
  console.log(data[0]);
  return data[0];
}
