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

const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Id" source="id" alwaysOn />
    <TextInput label="Title" source="title" allowEmpty />
    <TextInput label="Alias" source="alias" allowEmpty />
  </Filter>
);

export const CategoryList = (props) => {
  return (
    <List filters={<CategoryFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="alias" />
        <TextField source="parent_aliases.length" />
        <TextField source="country_whitelist.length" />
        <TextField source="country_blacklist.length" />
        <TextField source="created_by" />
        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export const CategoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="alias" />
      <TextField source="parent_aliases" />
      <TextField source="country_whitelist" />
      <TextField source="country_blacklist" />
      <TextField source="created_by" />
      <TextField source="updated_by" />
    </SimpleShowLayout>
  </Show>
);
