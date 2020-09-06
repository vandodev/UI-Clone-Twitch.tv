import React from 'react';

import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';

import {Wrapper, Container, Main } from './styles';

interface Item {
  key:string;
  render: () => JSX.Element;
  isTitle?: Boolean 
}

const Following: React.FC = () => {

  const {data, indexes} = React.useMemo(() => {
    const items : Item[] = [

      {
        key:'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },

      {
        key:'FOLLWqED_CATEGORIES',
        render: () => <Title>Folowed categories</Title>,
        isTitle:true
      },
      {key:'C1', render: () => <CategoryList />},

      {
        key:'LIVE_CHENNELS',
        render: () => <Title>Live chennels</Title>,
        isTitle:true
      },
      {key:'C2', render: () => <StreamList />},

      {
        key:'CONTINE_WATCHING',
        render: () => <Title>Continue wathing</Title>,
        isTitle:true
      },
      {key:'C3', render: () => <View />},

      {
        key:'OFLINE_CHENNELS',
        render: () => <Title>Offiline chennels</Title>,
        isTitle:true
      },
      {key:'C4', render: () => <View />}

     ];

     const indexes : number[] = [];

     items.forEach((item, index) => item.isTitle && indexes.push(index));

     return{
       data:items,
       indexes,
     }

  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}

            //Refresh effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
