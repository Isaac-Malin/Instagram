import "./App.scss";
import FollowMe from "./Components/FollowMe/FollowMe";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="app_container">
      <section className="nav_bar">
        <NavBar />
      </section>
      <section className="follow_me">
        <FollowMe/>
      </section>
    </div>
  );
}

export default App;
