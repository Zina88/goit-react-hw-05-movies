import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getVideo from 'services/getVideo';
import ReactPlayer from 'react-player';
import { Wrapper } from './Video.styles';

export default function Video() {
  const [video, setVideo] = useState({});
  const { moviesId } = useParams();

  useEffect(() => {
    getVideo(moviesId).then(({ results }) => setVideo(results[0]));
  }, [moviesId]);

  const { key } = video;

  return (
    <Wrapper>
      <ReactPlayer
        url={`https://www.youtube.com/embed/${key}`}
        width="640px"
        height="360px"
        controls={true}
      />
    </Wrapper>
  );
}
