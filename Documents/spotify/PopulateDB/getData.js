const data = () => {

    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, 'data.csv');

    let f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
        function(err){console.log(err);});

    f = f.split("\n");

    headers = f.shift().split(",");

    var json = [];    
    f.forEach((d) => {
        
        tmp = {}
        row = d.split(",")
        for(var i = 0; i < headers.length; i++){
            tmp[headers[i]] = row[i];
        }
        json.push(tmp);
    });


    json.forEach((row) => {
        let keys = Object.keys(row);
        keys.forEach((key) => {
            if(key !== "name" && key !== "artists"){
                row[key] = eval(row[key]);
            }
            else{
                if(row[key] !== undefined)
                    row[key] = row[key].replace(//"/g, "`");
                )
            }
        })
    })
    return json;
};

module.exports = data;