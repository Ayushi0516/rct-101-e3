import "./App.css";
 import Navbar from "./components/Navbar/Navbar";
 import Login from "./pages/Login";
 

function App() {
  return (
    <div className="App">
      {
        <>
       
         <Navbar/>
         <Login/>
      </>
      }
    </div>
  );
}

export default App;
