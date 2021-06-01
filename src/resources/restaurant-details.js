import React from "react";
import {
  Filter,
  TextInput,
  NumberInput,
  List,
  Datagrid,
  TextField,
  ImageField,
  BooleanField,
  UrlField,
  // Create,
  // SimpleForm,
  // Edit,
  Show,
  SimpleShowLayout,
  // RichTextField,
  // EditButton,
} from "react-admin";

const RestaurantDetailsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Id" source="id" alwaysOn />
    <TextInput label="Name" source="name" allowEmpty />
    <NumberInput label="Rating" source="rating" allowEmpty />
  </Filter>
);

export const RestaurantDetailsList = (props) => {
  return (
    <List filters={<RestaurantDetailsFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="image_url" />
        <TextField source="review_count" />
        <TextField source="rating" />
        <TextField source="location.city" />
        <TextField source="location.country" />
        <TextField source="phone" />
        <TextField source="created_by" />
        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export const RestaurantDetailsShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="alias" />
      <ImageField source="image_url" />
      <BooleanField source="is_closed" />
      <BooleanField source="is_claimed" />
      <UrlField source="url" />
      <TextField source="review_count" />
      <TextField source="rating" />
      <TextField source="price" />
      <TextField source="coordinates.latitude" />
      <TextField source="coordinates.longitude" />
      <TextField source="location.address1" />
      <TextField source="location.address2" />
      <TextField source="location.address3" />
      <TextField source="location.city" />
      <TextField source="location.zip_code" />
      <TextField source="location.country" />
      <TextField source="location.state" />
      <TextField source="location.display_address" />
      <TextField source="phone" />
      <TextField source="display_phone" />
      <TextField source="distance" />
      <TextField source="categories" />
      <TextField source="transactions" />
      <TextField source="created_by" />
      <TextField source="updated_by" />
    </SimpleShowLayout>
  </Show>
);
