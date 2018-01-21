var MongoClient = require("mongodb").MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://yamuna:umai123@ds111478.mlab.com:11478/projector1").then(function(client){
console.log("connected to mongodb");
exports.database=client.db("projector1");
  });
}
