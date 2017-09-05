var patient = sequelize.define("patient", {
	fName:{
		type: Sequelize.string
	},
	lName:{
		type: Sequelize.string
	},
	phNum:{
		type: Sequelize.integer
	},
	address:{
		type: Sequelize.string
	},
	dateApt:{
		type: Sequelize.date
	},
	dateTime:{
		type: Sequelize.string
	}
}, {
	timestamps: false
});

patient.sync();
module.exports = patient;