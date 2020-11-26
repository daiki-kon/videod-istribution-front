import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { RatingButtonGroup } from './ratingButtonGroup';
import { UserLabel } from './userLabel';
import styled from 'styled-components';

export type videoInfoProps = {
  videoTitle: string;
}

export const VideoInfo: FC<videoInfoProps> = (
  props: videoInfoProps
) => {
  return(
    <Wrapper>
      <h3>{props.videoTitle}</h3>
      <VideoDetailInfo>
        <UserLabel userName={'Elliot'} iconUrl={'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'}/>
        <RatingButtonGroup goodNum={100} badNum={200}/>
      </VideoDetailInfo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 3vh 0vw 0vh 3vw;
  height: auto;
  width: 82vw;
`;

const VideoDetailInfo = styled.div`
  margin: 4vh 0vw;
  display: flex;
  vertical-align: middle;
  width: 85vw;
`;