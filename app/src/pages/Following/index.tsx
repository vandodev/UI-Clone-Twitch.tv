import React from 'react';

import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';

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
        render: () => <View />
      },

      {
        key:'FOLLWED_CATEGORIES',
        render: () => <View />,
        isTitle:true
      },
      {key:'C1', render: () => <View />},

      {
        key:'LIVE_CHENNELS',
        render: () => <View />,
        isTitle:true
      },
      {key:'C2', render: () => <View />},

      {
        key:'CONTINE_WATCHING',
        render: () => <View />,
        isTitle:true
      },
      {key:'C3', render: () => <View />},

      {
        key:'OFLINE_CHENNELS',
        render: () => <View />,
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
