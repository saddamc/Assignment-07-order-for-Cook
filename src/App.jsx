import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Title from "./Components/Banner/Title";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
 
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }




  return (
    <>
      <Banner></Banner>
      <Title></Title>
      <div className="md:flex my-[60px]">
        <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>
      </div>
    </>
  );
}

export default App;
