export async function httpGetMapboxUrl() {
  const res = await fetch("http://localhost:8000/mapbox", {
    method: "get",
  });
  const data = await res.json();
  console.log("data omcing here: ", data);

  return data;
}
