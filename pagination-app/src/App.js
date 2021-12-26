import React, { useEffect } from "react";
import Follower from "./components/Follower";
import Loading from "./components/Loading";
import useFetch from "./useFetch";
function App() {
  const { data, loading } = useFetch();

  useEffect(() => {
    console.log(data);
  })
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
