import { Route, Routes } from "react-router-dom";
import CopyKiller from "./component/CopyKiller/CopyKiller";
import Mypage from "./component/Mypage/Mypage";
import SignUp2 from "./component/Login/SignUp2";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import ResultPage from "./component/ResultPage/ResultPage";
import Home from "./component/Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn) {
      setIsLoggedIn(JSON.parse(storedLoggedIn));
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  };

  return (
    <div className='App'>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/resultpage' element={<ResultPage />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/copykiller' element={<CopyKiller />}></Route>
      </Routes>
    </div>
  );
}

export default App;
