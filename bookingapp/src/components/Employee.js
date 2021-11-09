import React from 'react'
import { List, Create, Edit, DateField, DateInput, SimpleForm, Datagrid, EmailField, TextField, TextInput, EditButton, DeleteButton, ImageInput, ImageField } from 'react-admin'


export const EmployeeList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="salary" />
                <TextField source="work_location" />
                <EditButton basePath="/employees" />
                <DeleteButton basePath="/employees" />
            </Datagrid>
        </List>
    )
}

export const EmployeeCreate = (props) => {
    return (
        <Create title='Create Employee' {...props}>
            <SimpleForm>
                <TextInput type="number" source="id" />
                <TextInput type="number" source="salary" />
                <TextInput source="work_location" />
            </SimpleForm>
        </Create>
    )
}
export const EmployeeEdit = (props) => {
    return (
        <Edit title='Edit Employee' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput type="number" source="salary" />
                <TextInput source="work_location" />
            </SimpleForm>
        </Edit>
    )
}
