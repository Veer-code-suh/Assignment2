import logo from "./logo.svg";
import "./App.css";
import ScrollableAthleteBar from "./pages/ScrollableAthleteBar";

function App() {
  const athletesData = [
    { name: "Abhishek", level: "Basic" },
    { name: "Tarun", level: "Intermediate" },
    { name: "Mohan", level: "Advanced" },
    { name: "Mohan", level: "Intermediate" },
    { name: "Raja", level: "Basic" },
  ];

  return (
    <div className="App">
      <ScrollableAthleteBar athletes={athletesData} />
    </div>
  );
}

export default App;
