const videoGames = require('../db/videogames.js')
const fs = require("fs");

// INDEX 
const index = (req, res) => {
  res.json({
    data: videoGames,
    count: videoGames.length,
  });
};


const show = (req, res) => {
  const videogame = videoGames.find(
    (videogame) => videogame.nome.toLowerCase() === req.params.nome
  );

  if (!videogame) {
    res.status(404).json({
      error: `nessun videogioco trovato con questo nome ${req.params.nome}`,
    });
  }

  res.status(200).json({
    data: videogame,
  });
};


const store = (req,res) => {

    console.log(req.body);

    const videogame = {
      nome: req.body.nome,
      generazione: req.body.generazione,
      genere: req.body.genere,
      pubblicazione: req.body.pubblicazione
    };

    videoGames.push(videogame)

    fs.writeFileSync('./db/videogames.js', `module.exports = ${JSON.stringify(videoGames, null, 4)}`);

    return res.status(201).json({
      status: 201,
      data: videoGames,
      count: videoGames.length,
    });
    

}



const update = (req, res) => {

    const videogame = videoGames.find( videogame => videogame.nome.toLowerCase() === req.params.nome );

    if (!videogame) {
        res.status(404).json({
            error: `nessun videogioco trovato con questo nome ${req.params.nome}`,
        })
    }

    videogame.nome = req.body.nome,
    videogame.generazione = req.body.generazione,
    videogame.genere = req.body.genere,
    videogame.pubblicazione = req.body.pubblicazione

    fs.writeFileSync(
      "./db/videogames.js",
      `module.exports = ${JSON.stringify(videoGames, null, 4)}`
    );

    res.status(200).json({
        status: 200,
        data: videoGames
    })
}


const destroy = (req, res) => {

    const videogame = videoGames.find(
      (videogame) => videogame.nome.toLowerCase() === req.params.nome
    );

    if (!videogame) {
      res.status(404).json({
        error: `nessun videogioco trovato con questo nome ${req.params.nome}`,
      });
    }

    const newVideoGames = videoGames.filter( videogame => videogame.nome.toLowerCase() !== req.params.nome );

    fs.writeFileSync("./db/videogames.js", `module.exports = ${JSON.stringify(newVideoGames, null, 4)}`
    );

    res.status(200).json({
      status: 200,
      data: newVideoGames
    });
}



module.exports = {
    index,
    show,
    store,
    update,
    destroy
}