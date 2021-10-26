const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(404).send("");
})

app.get('/nft/:id', (req, res) => {
  res.json({
    name: "-",
    image: "https://gateway.pinata.cloud/ipfs/QmNQq33D3Y1LhftVkHbVJZziuFLQuNLvFmSExwtEcKXcJx",
    attributes: [{"trait_type":"-","value":"-"}]
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
