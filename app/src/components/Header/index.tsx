import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import colors from '../../styles/colors';

import { Container, Avatar, OnlneStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  return (
    <Container>

       <Avatar>
        <OnlneStatus />
      </Avatar>

      <RightSide>

        <Button>
        <MaterialIcons 
            name="notifications-none"  
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons           
            name="message-outline" 
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather          
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>

      </RightSide>

    </Container>
  );
};

export default Header;
