import React, { FC } from 'react'
import '../styles/pages/playVideo.css'

type videoPlayerProps = {
  className: string
}

export const VideoPlayer: FC<videoPlayerProps> = (
  props: videoPlayerProps
) => {
  return(
    <>
      <video className={props.className} src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' controls></video>
    </>
  )
}
