// const MAPBOX_URL = process.env.MAPBOX_URL;

function httpGetMapboxUrl(req, res) {
  return res.status(200).json({ MAPBOX_URL: `${process.env.MAPBOX_URL}` });
}

module.exports = { httpGetMapboxUrl };
