import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/Profile";
import { UserProvider } from './context/index';
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {

  return (
    <div className="App" id="page-container">
      <div id="content-wrap">
      <BrowserRouter>
      <UserProvider>
        <div>
        <Nav />
        <main className="">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          {/* <Route path="/profile" component={ProfilePage} /> */}
        </main>
        </div>
        </UserProvider>
      </BrowserRouter>
      </div>
      <footer id="footer">
        Copyrights reserved
      </footer>
    </div>

    
  );
}

export default App;
