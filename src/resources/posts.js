import React from "react";
import {
  Filter,
  TextInput,
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  Edit,
  Show,
  SimpleShowLayout,
  RichTextField,
  EditButton,
} from "react-admin";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const PostList = (props) => {
  return (
    <List filters={<PostFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" style={{ width: "100%" }} />
      <TextInput multiline source="body" style={{ width: "100%" }} />
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" style={{ width: "100%" }} />
      <TextInput multiline source="body" style={{ width: "100%" }} />
    </SimpleForm>
  </Edit>
);
