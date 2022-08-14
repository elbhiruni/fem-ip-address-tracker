export default async function geolocation(req, res) {
  const ipAddress = req.query.ipAddress;
  const domain = req.query.domain;
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${ipAddress}&domain=${domain}`
  );
  const data = await response.json();
  res.status(200).json(data);
}
