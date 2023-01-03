import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, List, Item, Img, Title, VoteWrapper, LinkNav, Vote } from './MovieList.styles';
import noPoster from 'utilits/img/No_Poster.png';
import Loader from 'components/Loader';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <Wrapper>
      <List>
        {movies.map((movies, index) => (
          <Item key={index}>
            <LinkNav to={`/movies/${movies.id}`} state={{ from: location }}>
              <Img
                src={
                  movies.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                    : noPoster
                }
                alt={movies.title}
              />
              <Title>{movies.title}</Title>
              <VoteWrapper>
                <p>
                  vote average:
                  <Vote>{movies.vote_average ? movies.vote_average.toFixed(1) : '-'}</Vote>
                </p>
                <p>
                  vote count: <Vote>{movies.vote_count}</Vote>
                </p>
              </VoteWrapper>
            </LinkNav>
          </Item>
        ))}
      </List>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}

MoviesList.propTypes = {
  index: PropTypes.string,
  movies: PropTypes.array,
};
