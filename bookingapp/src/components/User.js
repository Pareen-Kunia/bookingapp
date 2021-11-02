import React from 'react'
import { List, Create, Edit, DateField, DateInput, SimpleForm, Datagrid, EmailField, TextField, TextInput, EditButton, DeleteButton, ImageInput, ImageField } from 'react-admin'


export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <ImageField source="url" title="title" />
                <TextField source="firstName" />
                <TextField source="secondName" />
                <TextField source="userName" />
                <TextField source="gender" />
                <EmailField source="email" />
                <TextField source="contactNo" />
                <TextField source="address" />
                <DateField source="birthday" />
                <EditButton basePath="/users" />
                <DeleteButton basePath="/users" />
            </Datagrid>
        </List>
    )
}

export const UserCreate = (props) => {
    return (
        <Create title='Create User' {...props}>
            <SimpleForm>
                <TextInput type="number" source="id" />
                <ImageInput source="url" label="Related pictures" accept="image/*">
                    <ImageField source="url" title="title" />
                </ImageInput>
                <TextInput source="firstName" />
                <TextInput source="secondName" />
                <TextInput source="userName" />
                <TextInput source="gender" />
                <TextInput source="email" />
                <TextInput source="contactNo" />
                <TextInput source="address" />
                <DateInput source="birthday" />
            </SimpleForm>
        </Create>
    )
}
export const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <ImageInput source="url" label="Related pictures" accept="image/*">
                    <ImageField source="url" title="title" />
                </ImageInput>
                <TextInput disabled source="id" />
                <TextInput source="firstName" />
                <TextInput source="secondName" />
                <TextInput source="userName" />
                <TextInput source="gender" />
                <EmailField source="email" />
                <TextInput source="contactNo" />
                <TextInput source="address" />
                <DateField source="birthday" />
            </SimpleForm>
        </Edit>
    )
}
