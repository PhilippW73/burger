var connection = require("../config/connection.js");


function printQuestionMarks(num) {
  var arr = [];
	for (var i = 0; i < num; i++) {
	    arr.push("?");
	  }
  	return arr.toString();
}

// for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//  };

 var orm = {
//SELECT * FROM [table];
// Retrieve all burgers
	selectAllBurgers: function(tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(querystring, [tableInput], function(err, result) {
			if (err) {
	     		return res.status(500).end();
	    	}
	    	cb(result);
		});
	},

//INSERT INTO [table] ([column], [column]) VALUES ('[value]', [value]');
// Create a new burger
	createBurger: function(table, cols, vals, cb) {
		var querystring = "INSERT INTO " + table;
		
		queryString += " (";
	    queryString += cols.toString();
	    queryString += ") ";
	    queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length);
	    queryString += ") ";

	    console.log(queryString);

	    connection.query(queryString, vals, function(err, result) {
	      if (err) {
	        throw err;
	      }

      		cb(result);
    	
    	});
  	},

// UPDATE [table] SET [column] = '[updated-value]' WHERE [column] = [value];
// update Burger
	updateBurger: function(table, objColVals, condition, cb) {
		var querystring = "UPDATE " + table;

		queryString += " SET ";
	    queryString += objToSql(objColVals);
	    queryString += " WHERE ";
	    queryString += condition;

	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

      		cb(result);
    	});
  	},
	
};

module.exports = orm;