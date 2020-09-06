import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg'
import { Text } from 'react-native';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,

 } from './styles';

const StreamList: React.FC = () => {

  const StriamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>Evandro Oliveira</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
          It is a long established fact that a reader will be distracted 
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>

        </StreamRow>

          <TagRow>

            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>

            <TagView>
              <TagText>Web Development</TagText>
            </TagView>

          </TagRow>

      </StreamColumn>

    </StreamContainer>
  )

  return (
    
      <List>
        <StriamItem />
        <StriamItem />
        <StriamItem />
        <StriamItem />
      </List>
   
  );
};

export default StreamList;
