import "./App.css";
import AboutRoot from "./components/about/AboutRoot";
import CareerRoot from "./components/career/CareerRoot";
import IntroRoot from "./components/intro/IntroRoot";
import ProjectRoot from "./components/project/ProjectRoot";
import ResumeRoot from "./components/resume/ResumeRoot";
import ContestRoot from "./components/contest/ContestRoot";
import Login from "./login";
import { useState } from "react";

function App() {
  const [id, SetId] = useState("");
  const [pwd, SetPwd] = useState("");
  const [logged, SetLogged] = useState(false);
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePwd = (e) => {
    SetPwd(e.target.value);
  };
  const changeLogged = () => {
    if (id === "1234" && pwd === "1234") {
      SetLogged(true);
    }
  };

  if (logged) {
    return (
      <div>
        <IntroRoot />
        <AboutRoot />
        <ResumeRoot />
        <ProjectRoot />
        <ContestRoot />
        <CareerRoot />
      </div>
    );
  } else
    return (
      <div className="loginbox">
        <div className="logincontainer">
          <Login
            id={id}
            pwd={pwd}
            changeId={changeId}
            changePwd={changePwd}
            changeLogged={changeLogged}
          />
        </div>
      </div>
    );
}

export default App;
