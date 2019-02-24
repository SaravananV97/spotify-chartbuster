module.exports = () => {
    const mysql = require("mysql"); 
    const getConnection = () => {
        const connection = mysql.createConnection({
            host: "us-cdbr-iron-east-03.cleardb.net",
            user: "b5bfc051f55894",
            password: "549fabf2"
        });
        return connection;
    }
    return {getConnection};
}