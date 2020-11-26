import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { VideoPlayer } from '../component/videoPlayer';
import { VideoInfo } from '../component/videoInfo';
import styled from 'styled-components';

export const PlayVideoPage: FC = (

  ) => {
    return(
      <Wrapper>
        <VideoPlayer videoUrl={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}/>
        <VideoInfo videoTitle={'videoTitle'}/>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
  width: 82vw;  
`;
