const {ApolloServer,gql}=require("apollo-server")


//data
const movies = [
    {
      id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
      name: "spider-man",
      genre:"Action",
      language:"English",
      rating:8
    },
    {
      id: "34115aac-0ff5-4859-8f43-10e8db23602b",
      name: "RRR",
      genre:"Action/Drama",
      languag:"Telugu",
      rating:8.5


    },
    {
      id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
      name: "hollow-man",
      genre:"mystery/fiction",
      language:"English",
      rating:7.8
    },
  ];

  const typeDefs=gql`
    type Query{
        movies:[Movie!]!
        movie(id:ID):Movie
    }

    type Movie{
        id:ID!
        name:String!
        genre:String!
        language:String!
        rating:Float!
        }
`
//resolvers
Query={
    movies: ()=>{
        return movies
    },
    movie:(parent,{id},context)=>{
        const movieId=movies.find(movie=>movie.id===id)
        console.log(movieId);
        return movieId
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query
    }
   
});
server.listen().then(({url})=>{
    console.log("server is ready at :"+url);
}) 