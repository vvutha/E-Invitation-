
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cover from "./componets/Cover";
import Detail from "./componets/Detail";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import Join from "./componets/Join";
import BackgroundMusic from "./componets/BackgroundMusic";
import WeddingPhotoGallery from "./componets/WeddingPhotoGallery";
import Wish from "./componets/Wish";


function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/detail">Detail</Link> | <Link to="/test">Test</Link> | <Link to="/cover">Cover</Link>
      </nav> */}
      <BackgroundMusic/>

      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/WeddingPhotoGallery" element={<WeddingPhotoGallery />} />
        <Route path="/join" element={<Join />} />
        <Route path="/wish" element={<Wish/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
