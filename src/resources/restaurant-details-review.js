import React from "react";
import {
  Filter,
  TextInput,
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
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const RestaurantDetailsReviewList = (props) => {
  return (
    <List filters={<RestaurantDetailsReviewFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="text" />
        <TextField source="rating" />
        <TextField source="created_by" />
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
      <TextField source="created_by" />
      <TextField source="updated_by" />
    </SimpleShowLayout>
  </Show>
);
