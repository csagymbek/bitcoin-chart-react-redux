import logo from "./logo.svg";
import "./App.css";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/bitcoinActions";

function App() {
  const [num, setNum] = useState(15);

  const dispatch = useDispatch();

  const state = useSelector((state) => state.bitcoin);

  const fetchData = (time) => {
    // fetch data from redux using time
    dispatch(
      getData({
        time,
        number: num,
      })
    );
  };

  return (
    <div className="App">
      <div className="btns-wrapper">
        <button onClick={() => fetchData("1min")}>1 Min</button>
        <button onClick={() => fetchData("5min")}>5 Min</button>
        <button onClick={() => fetchData("15min")}>15 Min</button>
        <input type="text" onChange={(e) => setNum(e.target.value)} />
        {state.loading && <p>Loading...</p>}
      </div>
      <div className="chart-wrapper">
        <Line data={state.data} />
      </div>
    </div>
  );
}

export default App;
