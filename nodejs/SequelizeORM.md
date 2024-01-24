const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('test', 'root', '111111',{host:'127.0.0.1',dialect:'mysql'});


//生成所有model
/*auto.run().then(data => {
 console.log('opk')
});*/

const {Sequelize,Op} = require("sequelize")
const sequelize = new Sequelize('test', 'root', '111111', {
  host: 'localhost',
  dialect: 'mysql'
});
const Models = require('./models/init-models');
const models= new Models(sequelize);
async function main (){
	//const project = await models.teata.findOne({ where: { id: 2 } });
	
	//select * from testa where name!='' order by id desc limit 1
	const project = await models.teata.findOne({
		limit: 1,
		where: {name:{[Op.ne]:''}},
		order:[
			['id', 'DESC']
		]
	});
	
	console.log(project);
	
	//await models.teata.create({ name: "Jane" });
	//const t3 = await models.teata.max("id");
	//console.log(t3);
}
main();

