import * as S from "./style";
// import logo from "./logo.png";
export default function NavBar() {
  return (
    <S.Container>
      <S.NavLink href="#signup">SignUp</S.NavLink>

      <S.NavLink href="#Login">LogIn</S.NavLink>

      <S.Logo href="#home">Div Academy</S.Logo>
    </S.Container>
  );
}
