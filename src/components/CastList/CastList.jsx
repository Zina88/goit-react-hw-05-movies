import { useNavigate } from 'react-router-dom';
import { Div, List, Item, Name, Rating, Img, Alert, Wrapper, Btn } from './CastList.styled';
import PropTypes from 'prop-types';
import noAvatar from 'utilits/img/No-Image.png';

export default function CastList({ actors }) {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return actors !== 0 && actors.length > 0 ? (
    <Div>
      <Wrapper>
        <Btn type="button" onClick={back}>
          Back
        </Btn>
      </Wrapper>

      <List>
        {actors.map(({ id, name, profile_path, popularity }) => (
          <Item key={id}>
            <Img
              src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : noAvatar}
              alt={name}
            />
            <Name>{name}</Name>
            <Rating>
              Rating: <b>{popularity ? popularity.toFixed(1) : '-'}</b>
            </Rating>
          </Item>
        ))}
      </List>
    </Div>
  ) : (
    <Alert>We don't have any actors for this movie :(</Alert>
  );
}

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      popularity: PropTypes.number,
    }),
  ),
};
