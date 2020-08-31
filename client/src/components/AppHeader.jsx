import React from 'react';
import { 
    Segment,
    Menu,
    Container,
    Button,
    Icon
} from 'semantic-ui-react'

const AppHeader = () => {
    return(
        <Segment inverted basic size="tiny">
            <Container >
                <Menu inverted borderless size="large" >
                    <Menu.Item as='h1'>
                        M.Y Shopping List
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button color='grey' size="large" href="http://www.github.com" >
                            <Icon size="large" name='github' />
                            Github
                        </Button>
                    </Menu.Item>
                </Menu>
            </Container>
        </Segment>
    )
}

export default AppHeader;