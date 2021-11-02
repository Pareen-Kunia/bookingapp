import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { AppointmentList, AppointmentEdit, AppointmentCreate } from './Appointment';
import { UserList, UserEdit, UserCreate } from './User';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});


const dataProvider = restProvider('http://localhost:3000')
function AdminPanel() {
    return (
        <>
            <Admin theme={theme} dataProvider={dataProvider}>
                <Resource name="appointments" list={AppointmentList} create={AppointmentCreate} edit={AppointmentEdit} />
                <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
            </Admin>
        </>
    );
}

export default AdminPanel;