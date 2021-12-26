import React, { useEffect, useState } from "react";
import Follower from "./components/Follower";
import Loading from "./components/Loading";
import useFetch from "./useFetch";

function App() {
  const { data, loading } = useFetch();
  //state for page
  const [page, setPage] = useState(0);
  //state for follower subarray based on current page
  const [followersOnPage, setFollowersOnPage] = useState([]);

  //  ***Click on page button***
  const handlePageChange = (e) => {
    const id = e.target.id;
    setPage(Number(id));
  }
  // ***NEXT AND PREV BTNS***
  const nextPage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    })
  }
  const prevPage = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    })
  }
  //check if loading then return, only when we finished loading use paginate functionality
  //thats why we add loading into dependecy array
  useEffect(() => {
    if (loading) return;
    //show single followers page, based on current page value
    setFollowersOnPage(data[page])
  }, [loading, page])
  return (
    <main>
      <div className="section-title">
        {loading ? 'Loading...' : <h1>Pagination</h1>}
        <div className="underline"></div>
      </div>
      <section className="followers">
        {loading ? <Loading /> :
          <div className="container">
            {followersOnPage.map((item) => {
              return (
                <Follower key={item.id} {...item} />
              )
            })}
          </div>
        }
        {loading ? null :
          <div className="btn-container">
            <button onClick={prevPage} className="prev-btn">Prev</button>
            {/* iterate through followers array and display every page as button index + 1 */}
            {data.map((item, index) => {
              return (
                <button id={index} onClick={handlePageChange} key={index} className={`page-btn ${index === page ? 'active-btn' : null}`}>{index + 1}</button>
              )
            })}
            <button onClick={nextPage} className="next-btn">Next</button>
          </div>}
      </section>
    </main>
  );
}

export default App;
