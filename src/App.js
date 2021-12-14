// import { useState } from "react";
// import { useEffect } from "react/cjs/react.development";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RenderingIndiv from "./routes/Detail";
import CallingMovies from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:id"  element={<RenderingIndiv/>}>
        </Route>
        <Route path="/"  element={<CallingMovies/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value)
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   }
//   console.log(toDos)
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
//         <button>All To Do</button>
//       </form>
//       <hr />
//       {toDos.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [price, setPrice] = useState([])
//   const [coins, setCoins] = useState([])
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setPrice(json);
//         setLoading(false);
//     });
//   }, [])
//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//       {loading ? (
//       <strong>Loading...</strong>
//       ) : (
//         <div>
//           <select>
//             {coins.map((coin, index) => (
//               <option key={index}>
//                 {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//               </option>
//             ))}
//           </select>
//           <div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
