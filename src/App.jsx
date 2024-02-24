import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  const handleSideBarClick = (tab) => {
    setselectedTab(tab);
  };

  return (
    <PostListProvider>
      <div className="d-flex">
        <div>
          <Sidebar
            selectedTab={selectedTab}
            onSideBarClick={handleSideBarClick}
          ></Sidebar>
        </div>
        <div className="w-100">
          <Header></Header>
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
