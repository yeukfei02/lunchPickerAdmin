import React from "react";
import {
  Filter,
  TextInput,
  List,
  Datagrid,
  TextField,
  // Create,
  // SimpleForm,
  // Edit,
  Show,
  SimpleShowLayout,
  // RichTextField,
  // EditButton,
} from "react-admin";

const UserConnectionDetailsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Id" source="id" alwaysOn />
    <TextInput label="Ip" source="ip" allowEmpty />
  </Filter>
);

export const UserConnectionDetailsList = (props) => {
  return (
    <List filters={<UserConnectionDetailsFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="ip" />
        <TextField source="os.name" />
        <TextField source="os.version" />
        <TextField source="client.type" />
        <TextField source="client.name" />
        <TextField source="client.version" />
        <TextField source="device.type" />
        <TextField source="created_by" />
        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export const UserConnectionDetailsShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="ip" />
      <TextField source="os.name" />
      <TextField source="os.version" />
      <TextField source="client.type" />
      <TextField source="client.name" />
      <TextField source="client.version" />
      <TextField source="device.type" />
      <TextField source="created_by" />
      <TextField source="updated_by" />
    </SimpleShowLayout>
  </Show>
);
