const db = require("../model/connection")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Mayuri@123",
        database: "second_project",
    },
});


get_course_data=(req,res)=>{
    knex.from('meraki_data').select("*")
    .then((rows)=>{
        res.send(rows)
    })
}

get_course_id=(req,res)=>{
    knex.from('meraki_data').select("*").where({"id":req.params.id})
    .then((rows)=>{
        res.send(rows)
    })
}

createCourse = (req, res) => {
    const newcourse = req.body;
    knex.schema.hasTable("meraki_data").then(function(exists) {
        if (exists) {
            res.send('new course has been added to database')
            return knex("meraki_data").insert({ id: newcourse.id, name: newcourse.name, logo: newcourse.logo, notes: newcourse.notes, days_to_complete: newcourse.days_to_complete, short_description: newcourse.short_description, type: newcourse.type, lang_available: newcourse.lang_available.toString() })
        }
    })
}

delete_Course_id = (req, res) => {
    const { id } = req.params
    knex.schema.hasTable("meraki_data").then(function(exists) {
        if (exists) {
            res.send({ Success: `data deleted by id:${id} successfully.` });
            return knex("meraki_data").where("id", id).del();
        }
    })
}

update_Course=(req,res)=>{
    knex.from("meraki_data") 
    .where("id","=",req.params.id)
     .update({id:req.body.id, name:req.body.name, logo:req.body.notes, days_to_complete:req.body.days_to_complete, short_description:req.body.short_description, type:req.body.type, course_type:req.body.course_type, lang_available:req.body.lang_available })
      .then(()=>{
           console.log("update successfully")
           res.send({massage:"data update successfully"}) 
       }) 
       .catch((err)=>{
       console.log(err)
   }) 
}



module.exports={get_course_data,get_course_id,createCourse,delete_Course_id,update_Course}