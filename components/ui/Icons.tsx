import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";

export const HomeIcon = (props: any) => (
  <Ionicons name="home" size={30} {...props} />
);

export const InfoIcon = (props: any) => (
  <Ionicons name="information-circle-outline" size={30} {...props} />
);

export const UserIcon = (props: any) => (
  <Ionicons name="person-circle-outline" size={30} {...props} />
);

export const SetterIcon = (props: any) => (
  <Ionicons name="hammer-outline" size={30} {...props} />
);

export const SearchIcon = (props: any) => (
  <Ionicons name="search" size={30} {...props} />
);

export const MapIcon = (props: any) => (
  <Ionicons name="map" size={30} {...props} />
);

export const InstagramIcon = (props: any) => (
  <Ionicons name="logo-instagram" size={30} color="black" {...props} />
);

export const LocationIcon = (props: any) => (
  <Ionicons name="location-sharp" size={24} color="red" {...props} />
);

export const ProblemsIcon = (props: any) => (
  <Ionicons name="book-sharp" size={24} color="#ccc7c7" {...props} />
);

export const ShareIcon = (props: any) => (
  <Ionicons name="share-social-outline" size={30} color="black" {...props} />
);

export const HeartIcon = (props: any) => (
  <Ionicons name="heart-outline" size={30} color="black" {...props} />
);

export const DropdownIcon = (props: any) => (
  <Ionicons name="chevron-down" size={20} color="black" {...props} />
);

export const LocationArrowIcon = (props: any) => (
  <FontAwesome6 name="location-arrow" size={24} color="black" {...props} />
);

export const CheckIcon = (props: any) => (
  <Ionicons name="checkbox-outline" size={24} color="black" {...props} />
);

export const VideoIcon = (props: any) => (
  <Octicons name="video" size={24} color="black" {...props} />
);
