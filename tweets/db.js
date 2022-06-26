const tweets=[
    { 
        id:"tweet"+1,
        body:"Blockchain #technology is being considered in various industries due to its track and trace capabilities. At #LOX, we’re bringing #blockchain and #Microdot technology to the wireless device #security industry.",
        date:"2020-08-09",
        AuthorId:"user"+1,
        StatsId:"stats"+11 
    },
    { 
        id:"tweet"+2,
        body:"The #electric #fireplace is a kind of #transformation of the fire. The principle of the electric fireplace is to quote the European classical fireplace production #technology and modern acoustooptics, so that the design of the traditional fireplace has been greatly changed",
        date:"2015-03-25",
        AuthorId:"user"+2,
        StatsId:"stats"+21 
    },
    { 
        id:"tweet"+3,
        body:"When sensors, IoT and holograms merge to make holographic avatars dance... A stunning show!Learn more about these new technologies and many more by joining FuturePass, our new Web3 Community: http://futurepass.xyz",
        date:"2019-12-30",
        AuthorId:"user"+3,
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
        id:"note"+1,
        body:"yashwanth liked your tweet"
    },
    {
        id:"note"+2,
        body:"ScurmMaster retweeted"
    },
    {
        id:"note"+3,
        body:"RRR film has again hit 1000crs"
    }
]

module.exports={
    tweets,
    users,
    notifications,
    stats,
}