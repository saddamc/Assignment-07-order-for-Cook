import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Title from "./Components/Banner/Title";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmars] = useState([]);

  const handleBookmarks = blog => {
    console.log('bookmark');
  }




  return (
    <>
      <Banner></Banner>
      <Title></Title>
      <div className="md:flex my-[60px]">
        <Blogs handleBookmarks={handleBookmarks} ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
