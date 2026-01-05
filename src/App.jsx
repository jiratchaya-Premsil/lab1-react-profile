import ProfileCard from "./components/ProfileCard"
import {useState, useEffect} from 'react';
function App() {
  const [githubData, setGithubData] = useState(null);
  const usernmae = "jiratchaya-Premsil";

  useEffect(() => {
    fetch(`https://api.github.com/users/${usernmae}`)
      .then(response => response.json())
      .then(data => {
        setGithubData(data);
        console.log(data);
      })
      .catch(error => console.error(error))
  },[]);
  return (
    <div style={{ display: 'flex' ,  flexDirection: 'column', alignItems:'center'}}>
      <h1>My first react app</h1>

      <ProfileCard
        name={githubData.login}
        role={githubData.type}
        bio={githubData.id}
      />

    </div>
  )
}

 export default App