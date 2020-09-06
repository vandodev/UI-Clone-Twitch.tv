import React from 'react';

import { Text } from 'react-native';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Colunm,
  UserName,
  Info,
  RightSide,
  RightCircle,


 } from './styles';

const ChannelList: React.FC = () => {

  const ChannelItem = () =>(

    <ChannelContainer>

      <LeftSide>
        <Avatar />
        <Colunm>
          <UserName>Evandro Oliveira Oficial</UserName>
          <Info>56 New vídeos</Info>
        </Colunm>
      </LeftSide>

      <RightSide>
        <RightCircle />
      </RightSide>

    </ChannelContainer>

  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
