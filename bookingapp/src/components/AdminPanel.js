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

const db = {
    "data": [{
        "appointments": [
            {
                "title": "Allegery",
                "body": "Rash",
                "appointmentAt": "2021-11-09",
                "id": 2
            }
        ],
        "comments": [
            {
                "id": 1,
                "body": "some comment",
                "postId": 1
            },
            {
                "id": 2,
                "body": "some comment",
                "postId": 1
            }
        ],
        "users": [
            {
                "id": "1",
                "firstName": "Carson",
                "secondName": "Rodrigues",
                "userName": "Rodrigues",
                "gender": "male",
                "email": "rodriguescarson@gmail.com",
                "address": "Goa",
                "contactNo": "702028663",
                "birthday": "2021-11-01"
            },
            {
                "id": "2",
                "firstName": "Jam",
                "secondName": "Rock",
                "userName": "jamrock",
                "gender": "Felmale",
                "email": "jr@gmail.com",
                "contactNo": "12346",
                "address": "india",
                "birthday": "2021-11-27"
            },
            {
                "url": {
                    "rawFile": {
                        "path": "CODE TRADE-01.png"
                    },
                    "url": "blob:http://localhost:3000/a1f7261b-910f-4bf3-adaf-299592326ee0",
                    "title": "CODE TRADE-01.png"
                },
                "firstName": "Carson",
                "secondName": "Rodrigues",
                "userName": "rodriguescarson",
                "gender": "Male",
                "email": "rodriguescarson@gmail.com",
                "address": "Ratwaddo",
                "contactNo": "702028663",
                "birthday": "2021-11-01",
                "id": "4"
            }
        ]
    }]
};

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