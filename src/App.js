import { Route, Routes } from "react-router-dom";
import CopyKiller from "./component/js/CopyKiller";
import Mypage from "./component/js/Mypage";
import SignUp2 from "./component/js/SignUp2";
import Header from "./component/js/Header";
import Login from "./component/js/Login";
import ResultPage from "./component/js/ResultPage";
import Home from "./component/js/Home";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/resultpage' element={<ResultPage />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/copykiller' element={<CopyKiller />}></Route>
      </Routes>
    </div>
  );
}

export default App;