import React, { FC } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label, Container, Rating } from 'semantic-ui-react'
import '../styles/component/videoInfo.css'

type videoInfoProps = {
  className: string;
}

export const VideoInfo: FC<videoInfoProps> = (
  props: videoInfoProps
) => {
  return(
    <div className={props.className}>
      <h3>this is title (これは タイトルです。)</h3>
      <div className='detail-info'>
        <UserLabel className='user-label' />
        <RatingButtonGroup className='rating-button'/>
      </div>
    </div>
  )
}

type userLabelProps = {
  className: string;
}

const UserLabel: FC<userLabelProps> = (
  props: userLabelProps
) => {
  return(
    <div className={props.className}>
      <Label basic image>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        Elliot
      </Label>
    </div>
    
  )
}

type RatingButtonGroupProps = {
  className: string;
}

const RatingButtonGroup: FC<RatingButtonGroupProps> = (
  props: RatingButtonGroupProps
) => {
  return(
    <div className={props.className}>
      <Button as='div' labelPosition='right'>
        <Button basic color='green'>
          <Icon name='thumbs up outline' />
        </Button>
        <Label as='a' basic color='green' pointing='left'>
        2,048
        </Label>
      </Button>
      <Button as='div' labelPosition='right'>
        <Button basic color='red'>
          <Icon name='thumbs down outline' />
        </Button>
        <Label as='a' basic color='red' pointing='left'>
          2,048
        </Label>
      </Button>
    </div>
  )
}