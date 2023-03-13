export async function httpGetGeoJsonData() {
  const res = await fetch("http://localhost:8000/geo", {
    method: "get",
  });
  const data = await res.json();
  console.log("geo", data[0]);
  return data[0];
}

export async function httpGetGeoJsonVietnam() {
  const res = await fetch("http://localhost:8000/geo/vietnam", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log("geovietnam", data[0]);
  // return data;
  return data[0];
}
