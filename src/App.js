
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cover from "./componets/Cover";
import Test from "./componets/Test";
import Detail from "./componets/Detail";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import MyComponent from "./componets/Join";


function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/detail">Detail</Link> | <Link to="/test">Test</Link> | <Link to="/cover">Cover</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/guest" element={<MyComponent />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
