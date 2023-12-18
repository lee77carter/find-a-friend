import "./styles.css";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import UserDetails from "./UserDetails";

const App = () => {
  const [data, setData] = useState({});
  // loading, success, error
  const [status, setStatus] = useState("loading");

  const fetchData = async () => {
    try {
      setStatus("loading");
      const request = await fetch("https://randomuser.me/api/");
      console.log(request);
      const { results } = await request.json();

      if (request.status === 200) {
        setData(results[0]);
        setStatus("success");
      }
    } catch (e) {
      setStatus("error");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {status === "error" && (
        <p>Something went wrong, please try again in a few minutes.</p>
      )}
      {status === "loading" && <Loader />}
      {status === "success" && (
        <UserDetails data={data} fetchData={fetchData} />
      )}
    </div>
  );
};

export default App;
