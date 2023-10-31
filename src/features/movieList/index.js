import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { StyledHeader, MoviesGrid } from "./styled";

const Movies = () => (
  <>
    <StyledHeader>
      <Header text="Popular movies" />
    </StyledHeader>
    <MoviesGrid>
      <MovieTile />
    </MoviesGrid>
  </>
);

export default Movies;