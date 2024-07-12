
import { useFetch } from "../useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {

  // const {data, fetchUrl } = useFetch(baseUrl,'users');
  
  const {data: userData} = useFetch(baseUrl, 'users');

  if ( true) alert("아 씨바 잦같네");

  return (
    <div>
      <h1>useFetch</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre> }

      {/* <button onClick={() => fetchUrl('users')}>Users</button>
      <button onClick={() => fetchUrl('posts')}>Posts</button>
      <button onClick={() => fetchUrl('todos')}>Todos</button> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default App;