import React, { useEffect } from "react";
import useFetch from "./useFetch";
function App() {
  const { data, loading } = useFetch();

  useEffect(() => {
    console.log(data);
  })
  return (
    <main>
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map(({ avatar_url, html_url, id, login }) => {
            return (
              <article className="card">
                <img src={avatar_url} alt={login} />
                <h4>{login}</h4>
                <a className="btn" href={html_url}>View Profile</a>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
