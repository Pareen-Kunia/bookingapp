import React from 'react'
import { List, Create, Edit, DateField, DateInput, SimpleForm, Datagrid, EmailField, TextField, TextInput, EditButton, DeleteButton, ImageInput, ImageField } from 'react-admin'


export const CustomerList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="company" />
                <TextField source="position" />
                <TextField source="instrest" />
                <EditButton basePath="/customers" />
                <DeleteButton basePath="/customers" />
            </Datagrid>
        </List>
    )
}

export const CustomerCreate = (props) => {
    return (
        <Create title='Create Customer' {...props}>
            <SimpleForm>
                <TextInput type="number" source="id" />
                <TextInput source="company" />
                <TextInput source="position" />
                <TextInput source="instrest" />
            </SimpleForm>
        </Create>
    )
}
export const CustomerEdit = (props) => {
    return (
        <Edit title='Edit Customer' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="company" />
                <TextInput source="position" />
                <TextInput source="instrest" />
            </SimpleForm>
        </Edit>
    )
}
