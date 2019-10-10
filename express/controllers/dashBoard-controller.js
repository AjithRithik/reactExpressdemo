var dbCon = require('../server-property/db');

exports.getProfileList = function(req,res){
    let query = `   select 
                    person.FIRSTNAME as firstName, person.LASTNAME as lastName, person.DATEOFBIRTH as DOB, person.status as status,
                    title.value as title, typeValue.value as type, team.value as team
                    from antonth.PERSONNEL person 
                    INNER JOIN antonth.POSITIONTITLE title ON person.POSITIONID = title.ID 
                    INNER JOIN antonth.TEAM team ON person.TEAMID = team.ID 
                    INNER JOIN antonth.PROFILEVALUE typeValue ON title.PROFILEID = typeValue.ID ORDER BY person.id desc
                ` 
    dbCon(query, function(err, rows)   {
        res.send(rows);
    });
}
