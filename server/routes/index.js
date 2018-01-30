const routes = (req, res) => {
  const string = req.body.string;
  const sorted = string.split('')
    .sort()
    .reverse()
    .join('');

  res.send(sorted);
};

module.exports = routes;