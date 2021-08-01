import Nav from "./components/Nav/Nav"
import './App.css';


function App() {

  const user = {
    username: "Keith",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/8ebf2a36-36dc-440d-acf7-df4ddf6c41f0-profile_image-70x70.png",
  }

  return (
    <div className="App">
      <Nav user={user}/>
    </div>
  );
}

export default App;
