import React from 'react'
import {
  Icon,
  Menu,
  Sidebar,
} from 'semantic-ui-react'

const VerticalSidebar = ({ animation, direction, visible }:any) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
)

export const MainSideBar=()=> { 
  const animation = 'slide along';
  const direction = 'left';
  const visible = false;
  const vertical = true;

  return (
    <div>
        {vertical && ( 
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
         )} 
    </div>
  )
}

export default MainSideBar