import NavBar from "../../Components/NavBar";
// import Slide from "../../Components/Slider";
import home from "./home.jpg";

import * as S from "./style";

function Home() {
  return (
    <>
      <NavBar />
      {/* <Slide /> */}
      <S.Pargraph>
        <S.FristSpan>
          Do you want to be a professional in programming & security ? <br />
        </S.FristSpan>{" "}
        <S.SecondSpan>
          {" "}
          Join to our Academy to learn code with the best sources.
        </S.SecondSpan>
        <br />
        <S.ThreedSpan>Let's go start to programming world !</S.ThreedSpan>
      </S.Pargraph>
      <S.Images src={home} className="App-logo" alt="home" />
    </>
  );
}

export default Home;
