import React, { useEffect, useState } from "react";
import Follower from "./components/Follower";
import Loading from "./components/Loading";
import useFetch from "./useFetch";
import paginate from "./utils";
function App() {
  const { data, loading } = useFetch();
  const [followers, setFollowers] = useState([]);

  //check if loading then return, only when we finished loading use paginate functionality
  useEffect(() => {
    if (loading) return;
    console.log(paginate(data));
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
            {data.map((item) => {
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
