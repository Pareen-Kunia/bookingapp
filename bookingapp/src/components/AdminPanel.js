import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { AppointmentList, AppointmentEdit, AppointmentCreate } from './Appointment';
import { UserList, UserEdit, UserCreate } from './User';
import { CustomerList, CustomerCreate, CustomerEdit } from './Customer';
import { CalenderList, CalenderEdit, CalenderCreate } from './Calender';
import { EmployeeList, EmployeeEdit, EmployeeCreate } from './Employee';
import { RoleList, RoleEdit, RoleCreate } from './Role';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        }
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