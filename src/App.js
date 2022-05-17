import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import Userlist from "./userlist";
// importing the render,route,routes from node for route a component not page!!!!
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from "./createuser";
import Userview from "./userview";
import UserEdit from "./UserEdit";

function App() {
  return (
    // if route is used,need to wrap the whole components and jsx in browserroute component
    // jsx=>java script xml ,elements in the react app is jsx
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              {/* in page ,to route the different componets  using routes jsx*/}
              <Routes>
                {/* it route difines a path and what component should render*/}
                <Route path="/" element={<Dashboard />} />
                <Route path="/userlist" element={<Userlist />} />
                <Route path="/createuser" element={<Createuser />} />
                <Route path="/userview/:id" element={<Userview />} />
                <Route path="/UserEdit/:id" element={<UserEdit />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
