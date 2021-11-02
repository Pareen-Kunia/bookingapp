import React from 'react'
import { List, Create, Edit, SimpleForm, TextInput, DateInput, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

export const AppointmentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="appointmentAt" />
                <EditButton basePath="/appointments" />
                <DeleteButton basePath="/appointments" />
            </Datagrid>
        </List>
    )
}

export const AppointmentCreate = (props) => {
    return (
        <Create title='Create a Appoinment' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='appointmentAt' source='appointmentAt' />
            </SimpleForm>
        </Create>
    )
}

export const AppointmentEdit = (props) => {
    return (
        <Edit title='Edit Appointment' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='appointmentAt' source='appointmentAt' />
            </SimpleForm>
        </Edit>
    )
}