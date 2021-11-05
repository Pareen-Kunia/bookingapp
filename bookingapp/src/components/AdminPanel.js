import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { AppointmentList, AppointmentEdit, AppointmentCreate } from './Appointment';
import { UserList, UserEdit, UserCreate } from './User';
import { CustomerList, CustomerCreate, CustomerEdit } from './Customer';
import { CalenderList, CalenderEdit, CalenderCreate } from './Calender';
import { EmployeeList, EmployeeEdit, EmployeeCreate } from './Employee';
import { RoleList, RoleEdit, RoleCreate } from './Role';

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
                <Resource name="calenders" list={CalenderList} create={CalenderCreate} edit={CalenderEdit} />
                <Resource name="customers" list={CustomerList} create={CustomerCreate} edit={CustomerEdit} />
                <Resource name="employees" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} />
                <Resource name="roles" list={RoleList} create={RoleCreate} edit={RoleEdit} />

            </Admin>
        </>
    );
}

export default AdminPanel;