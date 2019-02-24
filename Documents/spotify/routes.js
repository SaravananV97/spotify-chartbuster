const express = require("express");
const router = express.Router();
const DataAccess = require("./Database/data_access")();

router.get("/top50", (req, res) => {
    DataAccess.getTop50().then((songs) => {
       songs.sort((a, b) => a.rank - b.rank)
       res.json({songs});
    })
    .catch(err => {
        throw new Error(err);
    });
}); 

router.post("/search/:song", (req, res) => {
    DataAccess.searchSong(req.params.song).then((results) => {
        res.json({results});
    })
    .catch(err => {
        throw new Error(err);
    })
});
module.exports = router;
