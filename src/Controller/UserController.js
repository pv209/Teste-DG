const connection = require('../DataBase/Connection');
const { use } = require('../routes');

const reponseModel = {
    sucess:false,
    data: [],
    error: []
}

module.exports= {
 async cadastro(req,res) {
     const response = {...reponseModel}

     const{username, date} = req.body;

     const [, affectRows] = await connection.query(`
     INSERT INTO users (username,date) VALUES ("${username}","${date}");`) 

     response.sucess = affectRows > 0;

     return res.json(response);
 },

 async listar(_req,res) {
    const [, data] = await connection.query(`
    SELECT * FROM users`) 
    console.log(data);
    return res.json(data);
 }
}