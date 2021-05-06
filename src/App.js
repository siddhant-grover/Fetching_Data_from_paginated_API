import "./styles.css";
import React, { useEffect, useState } from "react";
import { User } from "../User";
export default function App() {
  const [c, setc] = useState([]);
  const [num, setnum] = useState(1);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api?" +
        new URLSearchParams({
          page: num
        })
    )
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setc((prev) => [...prev, ...res.results]);
        console.log(res);
        console.log(num);
      })
      .catch((error) => {
        alert(error);
      });
  }, [num]);

  return (
    <>
      <button onClick={() => setnum((prev) => prev + 1)}>add more users</button>
      {c.length > 0 &&
        c.map((item) => {
          console.log(item);
          return (
            <User key={item.phone} name={item.name} picture={item.picture} />
          );
        })}
    </>
  );
}
//fetchData is not an async function as , no promise returned , no need for async await / .then

//jo input me vo , apis call paint on screen
//1 form
//no form
