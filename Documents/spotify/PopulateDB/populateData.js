const dataRows = require("./getData")();



 connection.connect((err) => {
     if(err) throw new Error(err);
     else console.log("connected");
 });

 const schema = "heroku_82741746b247fba";
 const t_name = "songs"
 const query = "INSERT INTO `heroku_82741746b247fba`.`songs`(`song_name`,`artist_name`,`dance_ability`,`energy`,`key`,"+ 
 "`Loudness`,`Mode`,`speechiness`,`acousticness`,`instrumentness`,`liveness`,"+
 "`valence`,`tempo`,`duration_ms`,`time_sign`,`Rank`) VALUES ?";
 
 let values = []

dataRows.map((row,i) => {
    values.push([row.name, row.artists, row.danceability, row.energy, row.key, row.loudness, row.mode, row.speechiness, row.acousticness, row.instrumentalness, row.liveness, row.valence, row.tempo, row.duration_ms, row.time_signature, row.rank]);
}); 

console.log(values);
connection.query(query, [values], (err, rows) => {
        if(err) throw new Error(err);
        else{
            console.log(rows);
        }
});

connection.end((err) => {
    if(err)
        throw new Error(err);
    else
        console.log("connection terminated!")
});

