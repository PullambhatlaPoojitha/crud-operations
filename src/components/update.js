import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [fullName, setFullName] = useState('');
    const [contact, setcontact] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFullName(localStorage.getItem('Full Name'));
        setcontact(localStorage.getItem('Contact Number'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://retoolapi.dev/Q4y9UI/data/${id}`, {
            fullName,
            contact,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Full Name</label>
                    <input placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contact Number</label>
                    <input placeholder='Contact Number' value={contact} onChange={(e) => setcontact(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='is User' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
