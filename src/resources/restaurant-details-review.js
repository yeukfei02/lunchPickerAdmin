import React from "react";
import {
  Filter,
  TextInput,
  NumberInput,
  List,
  Datagrid,
  TextField,
  ImageField,
  //   BooleanField,
  UrlField,
  // Create,
  // SimpleForm,
  // Edit,
  Show,
  SimpleShowLayout,
  // RichTextField,
  // EditButton,
} from "react-admin";

const RestaurantDetailsReviewFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Id" source="id" alwaysOn />
    <TextInput label="Text" source="text" allowEmpty />
    <NumberInput label="Rating" source="rating" allowEmpty />
  </Filter>
);

export const RestaurantDetailsReviewList = (props) => {
  return (
    <List filters={<RestaurantDetailsReviewFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="text" />
        <TextField source="rating" />
        <TextField source="created_at" />
        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export const RestaurantDetailsReviewShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="text" />
      <TextField source="rating" />
      <UrlField source="url" />
      <TextField source="time_created" />
      <TextField source="user.id" />
      <UrlField source="user.profile_url" />
      <ImageField source="user.image_url" />
      <TextField source="user.name" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);
