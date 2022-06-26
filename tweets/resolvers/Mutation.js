exports.Mutation={
    createTweet:(parent, {body},{tweets}) => {
        const tweeting = tweets[0];
        const newTweet = {
            ...tweeting,
            id: "tweet4",
            body: body
        }

        tweets.push(newTweet);

        return newTweet;
    }
};