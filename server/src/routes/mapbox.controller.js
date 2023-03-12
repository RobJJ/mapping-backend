const mapboxUrl = process.env.MAPBOX_URL;

async function httpGetMapboxUrl(req, res) {
  console.log("mapbox router hit... the url is: ", mapboxUrl);
  return res.status(200);
}

module.exports = { httpGetMapboxUrl };
