import "./App.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;

//

//

/* function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Travelling around the world!!</h2>
      <h4>Countries Available: {countries.length}</h4>
      {countries.map((country) => (
        <Country name={country.name.common} captial={country.capital}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  console.log(props.captial);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.captial}</p>
    </div>
  );
} */
