
var movie=require('./moviedata');
var dbservice = require("../services/dbservice");
exports.getAllMovies=function(req,res){
  console.log("dbservice",dbservice);
  var db=dbservice.database;
  var moviesCollection=db.collection("movies");
  moviesCollection.find().toArray().then(function(result){
    var outputJSON={
      "dbservice":true,
      "data":result
    }
      return res.json(outputJSON);
  //  console.log("result",result);
});}
//  return res.json(outputJSON);
exports.addNewMovie=function(req,res,next){
  var db=dbservice.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "issuccess":true
    });
  });
}
