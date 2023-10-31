import {
  StyledNavigation,
  Header,
  Logo,
  Caption,
  List,
  PageLink,
} from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <Header to="/movies">
      <Logo />
      <Caption>Movies Browser</Caption>
    </Header>
    <List>
      <li>
        <PageLink to="/movies">Movies</PageLink>
      </li>
      <li>
        <PageLink to="/people">People</PageLink>
      </li>
    </List>
  </StyledNavigation>
);

export default Navigation;