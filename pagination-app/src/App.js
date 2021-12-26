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

  //check if loading then return, only when we finished loading use paginate functionality
  //thats why we add loading into dependecy array
  useEffect(() => {
    if (loading) return;
    //show single followers page, based on current page value
    setFollowersOnPage(data[page])
  }, [loading])
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
      </section>
    </main>
  );
}

export default App;
