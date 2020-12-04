import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import Navigation from "./components/Navigation";
import { imageList } from "./imageList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage posts={imageList} />
        </Route>
        <Route exact path="/explore">
          <ExplorePage />
        </Route>
        <Route exact path="/messages">
          <MessagesPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
