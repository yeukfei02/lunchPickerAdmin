import React from "react";
import {
  Filter,
  TextInput,
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

const FavouritesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Id" source="id" alwaysOn />
    <TextInput label="Ip" source="ip" allowEmpty />
  </Filter>
);

export const FavouritesList = (props) => {
  return (
    <List filters={<FavouritesFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="ip" />
        <TextField source="item.name" />
        <ImageField source="item.image_url" />
        <TextField source="item.review_count" />
        <TextField source="item.rating" />
        <TextField source="item.price" />
        <TextField source="item.location.city" />
        <TextField source="item.location.country" />
        <TextField source="item.phone" />
        <TextField source="created_by" />
        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export const FavouritesShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="ip" />
      <TextField source="item.id" />
      <TextField source="item.alias" />
      <TextField source="item.name" />
      <ImageField source="item.image_url" />
      <BooleanField source="item.is_closed" />
      <UrlField source="item.url" />
      <TextField source="item.review_count" />
      <TextField source="item.rating" />
      <TextField source="item.coordinates.latitude" />
      <TextField source="item.coordinates.longitude" />
      <TextField source="item.price" />
      <TextField source="item.location.address1" />
      <TextField source="item.location.address2" />
      <TextField source="item.location.address3" />
      <TextField source="item.location.city" />
      <TextField source="item.location.zip_code" />
      <TextField source="item.location.country" />
      <TextField source="item.location.state" />
      <TextField source="item.location.display_address" />
      <TextField source="item.phone" />
      <TextField source="item.display_phone" />
      <TextField source="item.distance" />
      <TextField source="item.categories" />
      <TextField source="item.transactions" />
      <TextField source="created_by" />
      <TextField source="updated_by" />
    </SimpleShowLayout>
  </Show>
);
