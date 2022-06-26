const {ApolloServer ,gql }  = require("apollo-server");

const typeDefs = gql`
type Query{
    Tweets:[Tweet!]!
    Tweet(id:ID!): Tweet
    User(id:ID!): User
    Users:[User]
    Notifications: [Notification]
}
type Tweet{
    id:ID!
    body:String
    date:String
    Stats:Stat  
}
type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    name: String 
    avatar_url: String
}
type Stat {
    id:ID!
    views: Int
    likes: Int
    retweets: Int
    responses: Int
}
type Notification {
    id:ID!
    body:String
}
`;



const resolvers={
    Query:{
        Tweets:()=>{
            
            return tweets
        },
        Users:() => {
            return users
        },
        Tweet:(parent,{id},context)=>{
          return tweets.find((tweet) => tweet.id === id);
        },
        User:(parent,{id},context)=>{
          return users.find((User) => User.id === id);
        },

        Notifications:(parent,args,context)=>{
              return notifications
          }
      },
      Tweet : {
        Stats:({StatsId},args,context)=>{
          return stats.find((stat) => stat.id === StatsId);
      
        }
      },
}
const tweets=[
    { 
        id:"tweet"+1,
        body:"Blockchain #technology is being considered in various industries due to its track and trace capabilities. At #LOX, we’re bringing #blockchain and #Microdot technology to the wireless device #security industry.",
        date:"2015-03-25",
        StatsId:"stats"+11 
    },
    { 
        id:"tweet"+2,
        body:"The #electric #fireplace is a kind of #transformation of the fire. The principle of the electric fireplace is to quote the European classical fireplace production #technology and modern acoustooptics, so that the design of the traditional fireplace has been greatly changed",
        date:"2019-12-30",
        StatsId:"stats"+21 
    },
    { 
        id:"tweet"+3,
        body:"When sensors, IoT and holograms merge to make holographic avatars dance... A stunning show!Learn more about these new technologies and many more by joining FuturePass, our new Web3 Community: http://futurepass.xyz",
        date:"2020-08-09",
        StatsId:"stats"+31  
    }
]

const users=[
    {
        id: "user"+1,
        username: "LoveFromLAL",
        first_name: "yashwanth",
        last_name: "lal",
        full_name: "yashwanth lal",
        name: "yashwanthLal",
        avatar_url: "https://www.avatar.com/yashwanth"
    },
    {
        id: "user"+2,
        username: "sai_kumar",
        first_name: "sai",
        last_name: "Kumar",
        full_name: "Sai Kumar",
        name: "saiKumar",
        avatar_url: "https://www.avatar.com/saikumar"
    },
    {
        id: "user"+3,
        username: "boogieman",
        first_name: "sharma",
        last_name: "rao",
        full_name: "sharma rao",
        name: "sharmaRao",
        avatar_url: "https://www.avatar.com/sharma"
    }
]

const stats=[
    {
        id:"stat"+11,
        views: 12,
        likes: 10,
        retweets: 5,
        responses: 4
    },
    {
        id:"stat"+21,
        views: 120,
        likes: 100,
        retweets: 50,
        responses: 40
    },
    {
        id:"stat"+31,
        views: 1250,
        likes: 1050,
        retweets: 550,
        responses: 450
    }
]

const notifications=[
    {
        id:"notifs"+1,
        body:"MRYadav liked your tweet"
    },
    {
        id:"notifs"+2,
        body:"ScroolBeast retweeted"
    },
    {
        id:"notifs"+3,
        body:"Elon Musk Tweeted again about doge coin"
    }
]

const server = new ApolloServer({
  typeDefs,
  resolvers,


});

server.listen().then(({url}) =>{
    console.log("Server : " + url)
});