import Categories from "./categories";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/categories">
          <Categories />
        </Route>
      </div>
    </Router>
  );
}
