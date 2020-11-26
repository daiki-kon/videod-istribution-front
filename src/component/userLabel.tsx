import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Label } from 'semantic-ui-react';
import styled from 'styled-components';

export type userLabelProps = {
  userName: string;
  iconUrl: string;
}

export const UserLabel: FC<userLabelProps> = (
  props: userLabelProps
) => {
  return(
    <Wrapper>
      <Label basic image>
        <img src={props.iconUrl} />
        {props.userName}
      </Label>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  padding: 0.5vh;
  vertical-align: middle;
`;