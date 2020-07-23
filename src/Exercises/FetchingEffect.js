import React, {useState, useEffect} from 'react';

/**
 * Fetching data using 
 * React UseEffect - calling GitHub Api
 * @param {*} login 
 */
function GitHubUser({login}){
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if(data){
    return (
      <div>
        <h1>{data.login}</h1>
        <h2>{data.url}</h2>
        <img src={data.avatar_url} width={200} alt="img" />
      </div>
    )
  }

  return null;
}

function FetchingEffect() {  
  return (    
    <GitHubUser login="alexandrecz"/>   
  )
}

export default FetchingEffect;