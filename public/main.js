console.log("thi file is loaded");
$.ajax({
  type:"GET",
  url:"movie/all",
  dataType:"json",
  success:function(response){
//  {console.log("data from server",response);
var data = formObject(response.data);
console.log("data",data);
constructDOM(data);
},
error:function(err){console.log("error in get method",err);}
});
function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;
  for (var i = 0; i <length; i++){
   var movie=response[i];
   var index=flags.indexOf(movie.language);
   if(index>=0)
   {
     categoryObject[index].movies.push(movie);
     continue;
   }
   else
     {
       flags.push(movie.language);
     }

//  console.log("movie",movie);
//  console.log("language",movie.language);
//  console.log(flags);
//  flags.push(movie.language);
//  if(flags.indexOf(movie.language)==-1)
  //flags.push(movie.language);
//}
//console.log(flags);
var objectSchema={
  "category":movie.language,
  "movies":[]
}
objectSchema.movies.push(movie);
    console.log("objectSchema",objectSchema);
    categoryObject.push(objectSchema);
    console.log("categoryObject",categoryObject);
}
console.log(flags);
return categoryObject;
    //console.log("formObject response",response);
}
function constructDOM(data){
  console.log(data);
  var categoryContent=[],len=objectSchema.movies.length;
  for(var i=0;i<data.length;i++){
    var category=data[i];
    console.log("constructDOM data",data[i]);
    var categoryTitle=$('<h3 class="categoryName">'+data[i].category+'</h3>');
      categoryContent.push(categoryTitle);
      for(var j=0;j<len;j++)
  {
    console.log(objectSchema.movies[j].name);
    var categoryMovie=$('<div class="movie fleft"><a href="#"><div class="poster"><img src="'+objectSchema.movies[j].thumbnailUrl+'" alt=""></div></a><div class="details"><p class="yearOfRelease">'+objectSchema.movies[j].releaseYear+'</p><h4 class="name">'+objectSchema.movies[j].name+'</h4></div>');
    categoryContent.push(categoryMovie);
      categoryContent.push('</div>');
 }
}



    $('section.content').html(categoryContent);
  }
