import React, { FC } from 'react';
import styled from 'styled-components';

export type videoPlayerProps = {
  videoUrl: string;
}

export const VideoPlayer: FC<videoPlayerProps> = (
  props: videoPlayerProps
) => {
  return(
    <>
      <Video src={props.videoUrl} controls/>
    </>
  )
}

const Video = styled.video`
  height: 70vh;
  margin: 0vh 0vw 0vh 2vw;
  padding: 0vw;
`;