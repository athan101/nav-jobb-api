const express = require("express");
const app = express();

app.get("/jobber", async (req, res) => {
  try {
    const response = await fetch("https://arbeidsplassen.nav.no/public-feed/api/v1/ads?municipalities=0402&size=1");
    const data = await response.json();
    res.json({ antall: data.totalElements });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Feil ved henting av jobber" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server kjører på port ${port}`));
