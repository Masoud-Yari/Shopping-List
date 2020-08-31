import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    Input, 
    Modal, 
    Button, 
    Icon 
} from 'semantic-ui-react';
import { addItem } from '../actions/itemAction';

const AddModal = () => {

    const [newItem, setNewItem] = useState({});
    const dispatch = useDispatch();

    const handleChange = e => {
        setNewItem({name: e.target.value});
    }

    return(
        <Modal trigger={<Button>Add new item</Button>} size="tiny" >
            <Modal.Header >Enter a Product to Add List</Modal.Header>
            <Modal.Content>
                <Input fluid icon='cart' iconPosition='left' placeholder='Enter Item here' onChange={handleChange} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => {
                    if(!newItem.name || newItem.name.trim() === '') return;
                    else{
                        dispatch(addItem(newItem));
                    }
                }} >
                    <Icon name='checkmark' />
                    ADD
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AddModal;