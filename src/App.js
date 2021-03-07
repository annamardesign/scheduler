import Categories from "./categories.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Categories />
        </Route>
      </div>
    </Router>
  );
}
