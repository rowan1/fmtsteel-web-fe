import React, { useState } from 'react';
import { Sidebar, Menu, Icon, Button } from 'semantic-ui-react';
export const SideAnimation=()=>{
    const [animation, setAnimation] = useState<any>('slide along');

    return(
        <>
    <Sidebar
        as={Menu}
        animation={animation}
        direction={'left'}
        icon='labeled'
        inverted
        vertical
        visible={true}
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

<Button
onClick={() =>
//   dispatch({ type: 'CHANGE_ANIMATION', animation: 'uncover' })
setAnimation('uncover')
}
>
Uncover
</Button>
</>
    )
    }