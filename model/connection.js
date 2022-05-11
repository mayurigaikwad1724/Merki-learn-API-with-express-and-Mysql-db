var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mayuri@123",
    database: "second_project"
});



// con.connect(function(err) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Connected!");
//     }
//     var sql = "CREATE TABLE meraki_data (id int primary key auto_increment, name VARCHAR(1000), logo VARCHAR(1000) , notes VARCHAR(1000),days_to_complete VARCHAR(1000),short_description VARCHAR(1000),type VARCHAR(1000),course_type VARCHAR(1000),lang_available VARCHAR(1000))";
//     con.query(sql, function (err, result) {
//     if (err) throw err;
//         console.log("Table created");
//     });
// });


// const data = require('../mynewfile.json')
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Database Connected!");
//     var values = []
//     for (let i = 0; i < data.length; i++) {
//         values.push([data[i].id, data[i].name, data[i].logo, data[i].notes, data[i].days_to_complete, data[i].short_description, data[i].type, data[i].course_type, (data[i].lang_available).toString()])
//     }
//     console.log(values);
//     var sql = `INSERT INTO meraki_data VALUES?`
//     con.query(sql, [values], (err, result) => {
//         if (err) throw err;
//         console.log('data inseted succesfully.');
//     })
// })

// module.exports=con

