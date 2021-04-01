import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
axios
  .get('/popular?api_key=0900e674aa431a5cac8b8b166be20d60')
  .then(res => console.log(res));
function App() {
  return (
    <div className="App">
      <p>qweqe</p>
    </div>
  );
}

export default App;
