import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Segment, Container, List, Button } from 'semantic-ui-react';
import { deleteItem, getItems } from '../actions/itemAction';

// import components
import AddModal from './AddModal';

const AppBody = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);
    
    const {items, loading} = useSelector(state => state);

    const displayItems = (item) => {
        return(
            <List.Item key={item._id} >
                <List.Content floated="right" >
                    <Button circular icon="trash" color="red" onClick={() => dispatch(deleteItem(item._id))} />
                </List.Content>
                <List.Content>
                    <List.Header>{item.name}</List.Header>
                </List.Content>
            </List.Item>
        );
    }

    return(
        <Container>
            <AddModal />
            <Segment>
                <List divided selection animated verticalAlign='middle' >
                    {
                        loading ? 'Loading...' : items.map(item => displayItems(item))
                    }
                </List>
            </Segment>
        </Container>
    )
}

export default AppBody;