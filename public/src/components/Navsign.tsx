import { useEffect, useState } from "react";
import '../styles/main.css';
import Rej from "./Rej";
import Login from "./Login";

function Navsign() {
  const [ok, setOk] = useState<boolean>(false);

  useEffect(() => {
    let s_btn : HTMLElement = document.getElementById("btn_s") as HTMLElement;
    s_btn.addEventListener("click", opensignbubble);

    // exit
    let exit_btn : HTMLElement = document.getElementById("exit_signme") as HTMLElement;
    exit_btn.addEventListener("click", exitsignbubble);
  }, [])

  const opensignbubble = () => {
    let x : HTMLElement  = document.getElementsByClassName("signmeall")[0] as HTMLElement;
    let y : HTMLElement = document.getElementsByClassName("blockspage")[0] as HTMLElement;
    x.style.display = "flex";
    y.style.display = "flex";
  }

  const exitsignbubble = () => {
    let x : HTMLElement  = document.getElementsByClassName("signmeall")[0] as HTMLElement;
    let y : HTMLElement = document.getElementsByClassName("blockspage")[0] as HTMLElement;
    x.style.display = "none";
    y.style.display = "none";
  }

  const change = (newok: boolean) : void => {
    setOk(newok);
  }

  const affiche = () => {
    if (ok) {
      return (
        <>
          <Login />
          <center className="f_in" onClick={() => change(false)}>Went create new account?</center>
        </>
      );
    } else {
      return (
        <>
          <Rej />
          <center className="f_in" onClick={() => change(true)}>You make an account, Login?</center>
        </>
      );
    }
  }

  return ( 
    <>
      <div className="blockspage"></div>
      <div className="signmeall">
        <div className="signme">
          <i className="fa-solid fa-circle-xmark" id="exit_signme"></i>
          {affiche()}
        </div>
      </div>
    </>
  );
}

export default Navsign;
