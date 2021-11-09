import React from 'react'
import { List, Create, Edit, DateField, DateTimeInput, DateInput, SimpleForm, Datagrid, EmailField, TextField, TextInput, EditButton, DeleteButton, ImageInput, ImageField } from 'react-admin'


export const CalenderList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="employeeId" />
                <TextField source="status" />
                <DateTimeInput source="appointmentAt" />
                <EditButton basePath="/calenders" />
                <DeleteButton basePath="/calenders" />
            </Datagrid>
        </List>
    )
}

export const CalenderCreate = (props) => {
    return (
        <Create title='Create Calender' {...props}>
            <SimpleForm>
                <TextInput type="number" source="id" />
                <TextInput source="employeeId" />
                <TextInput source="status" />
                <DateTimeInput source="appointmentAt" />
            </SimpleForm>
        </Create>
    )
}
export const CalenderEdit = (props) => {
    return (
        <Edit title='Edit Calender' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextField source="employeeId" />
                <TextField source="status" />
                <DateTimeInput source="appointmentAt" />
            </SimpleForm>
        </Edit>
    )
}