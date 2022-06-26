import { useQuery, gql } from "@apollo/client";

const GET_TWEETSLIST = gql`
query Tweets {
    Tweets {
      id
      body
      date  
      
    }
  }
`;

function useGetAllTweets() {
    const {error, loading, data} = useQuery(GET_TWEETSLIST);
    return (
        {
            error,
            loading,
            data
        }
    )
}

export default useGetAllTweets;


