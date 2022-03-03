const pool = require("../../config/db");

module.exports = {
    create: (data, callback) => {
        pool.query(
            'insert into registration(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)',
            [data.first_name, data.last_name, data.gender, data.email, data.password, data.number],
            (error, results, field) => {
                if(error)
                {
                    return callback(error,null);
                }

                return callback(null,results);
            }
            );

    }
};
