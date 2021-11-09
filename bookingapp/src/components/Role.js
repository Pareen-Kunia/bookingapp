import React from 'react'
import { List, Create, Edit, DateField, DateInput, SimpleForm, Datagrid, EmailField, TextField, TextInput, EditButton, DeleteButton, ImageInput, ImageField } from 'react-admin'


export const RoleList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="label" />
                <EditButton basePath="/roles" />
                <DeleteButton basePath="/roles" />
            </Datagrid>
        </List>
    )
}

export const RoleCreate = (props) => {
    return (
        <Create title='Create Role' {...props}>
            <SimpleForm>
                <TextInput type="number" source="id" />
                <TextInput type="number" source="name" />
                <TextInput source="role" />
            </SimpleForm>
        </Create>
    )
}
export const RoleEdit = (props) => {
    return (
        <Edit title='Edit Role' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="label" />
            </SimpleForm>
        </Edit>
    )
}