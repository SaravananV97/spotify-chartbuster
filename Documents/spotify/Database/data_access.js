const connect = require("./connectdb")();

const dataAccess = () => {
    const getTop50 = () => {
        const connection = connect.getConnection();
        const query = "SELECT * FROM heroku_82741746b247fba.songs where rank <= 50 order by rank";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, rows) => {
                if(err) reject(err); 
                connection.end((error) => {
                    if(error) throw new Error(error);
                    else resolve(rows);
                });
                });
            });
        }

        const searchSong = (song) => {
            const connection = connect.getConnection();
            const value = '%'+song+'%';
            const query = "select * from heroku_82741746b247fba.songs where song_name Like ? ";
            return new Promise((resolve, reject) => {
                connection.query(query, value, (err, rows) => {
                    if(err) reject(err);
                    connection.end((error) => {
                        if(error) throw new Error(error);
                        else resolve(rows);
                    });
                })
            });
        }
    return {getTop50, searchSong};
}

module.exports = dataAccess;

