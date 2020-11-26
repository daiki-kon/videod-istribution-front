import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Label } from 'semantic-ui-react';

export type ratingButtonGroupProps = {
  goodNum: number;
  badNum: number;
}

export const RatingButtonGroup: FC<ratingButtonGroupProps> = (
  props: ratingButtonGroupProps
) => {
  return(
    <>
      <Button as='div' labelPosition='right'>
        <Button basic color='green'>
          <Icon name='thumbs up outline' />
        </Button>
        <Label as='a' basic color='green' pointing='left'>
          {props.goodNum}
        </Label>
      </Button>
      <Button as='div' labelPosition='right'>
        <Button basic color='red'>
          <Icon name='thumbs down outline' />
        </Button>
        <Label as='a' basic color='red' pointing='left'>
          {props.badNum}
        </Label>
      </Button>
    </>
  )
}