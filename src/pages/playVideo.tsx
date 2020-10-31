import React, { FC } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { VideoPlayer } from '../component/videoPlayer'
import { VideoInfo } from '../component/videoInfo'
import '../styles/pages/playVideo.css'

export const PlayVideoPage: FC = (

  ) => {
    return(
      <div className='video-page'>
        <VideoPlayer className='video-player'/>
        <VideoInfo className='video-info'/>
      </div>
    )
  }