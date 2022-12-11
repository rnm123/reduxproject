
import './App.css';
import {HashRouter, Route,Routes,Link} from "react-router-dom";
import Myapi from './basic/api'
import MyUser from './basic/user';
import MyBook from './basic/mybook';
import AllData from './basic/alldata';

function App() {
  return (
    <HashRouter>
      <nav class="navbar navbar-dark bg-black">
      <div class="container">
      <Link to="/user">User</Link> 
      <Link to="/book">Book</Link> 
      <Link to="/alldata">All Data</Link> 
      <Link to="/api">API</Link> 
      </div>
      </nav>
      <Routes>     
        <Route exact path="/user" element={<MyUser />} />
        <Route exact path="/book" element={<MyBook />} />
        <Route exact path="/alldata" element={<AllData />} />
        <Route exact path="/api" element={<Myapi />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
