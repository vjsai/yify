var  api = require("./api");

function getMovies(callback)
{
    var options  = {
        limit : 5,
        set : 1,
        quality : 720,
        rating : 0,
        genre : "ALL",
        sort : "date",
        order : "desc"
    };
    api.apiCall("list.json",options,null,callback,null,"GET");
}

function getUpcomingMovies(callback)
{
   api.apiCall("upcoming.json",null,null,callback,null,"GET");
}

function getMovieDetails(id,callback)
{
    api.apiCall("movie.json",null,{id : id},callback,null,"GET");
}

function getComments(id,callback)
{
    api.apiCall("comments.json",null,{movieid : id},callback,null,"GET");
}

function getUserDetails(id,callback)
{
    api.apiCall("user.json",null,{id : id},callback,null,"GET");
}

module.exports = {
  getMovies : getMovies,
  getUpcomingMovies : getUpcomingMovies,
  getMovieDetails : getMovieDetails,
  getComments : getComments,
  getUserDetails : getUserDetails
};