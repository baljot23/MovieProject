import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "./Form";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Conatiner>
      <Logo to="/">ENTERTAINMENT</Logo>
      <HeaderOptions>
        <Home to="/">HOME</Home>
        <Movies to="/Movies">MOVIES</Movies>
        <TVShows to="/TvShows">TV SHOWS</TVShows>
        <MyList to="/MyList">MY LIST</MyList>
      </HeaderOptions>
      <SearchLogo>
        <FaSearch />
      </SearchLogo>
      <Avatar to="/form">Profile Icon</Avatar>
    </Conatiner>
  );
};

const Logo = styled(Link)`
  margin-left: 10px;
  margin-right: 20px;
  color: white;
  font-size: 25px;
  text-decoration: none;
`;

const HeaderOptions = styled.div`
  margin-left: 80px;
  margin-top: 5px;
  font-size: 16px;
  display: flex;
`;

const Home = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 30px;
`;

const Movies = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 30px;
`;
const TVShows = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 30px;
`;
const MyList = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 1000px;
`;

const SearchLogo = styled.div`
  margin-right: 55px;
`;
const Avatar = styled.div``;

const Conatiner = styled.div`
  background-color: black;
  color: white;
  padding: 30px;
  display: flex;
  opacity: 0.8;
`;
export default Header;
