import React from "react";
import { Nav } from "../_components";
import UserProfile from "../_components/UserProfile/UserProfile";
import supabase from "../supabase";

function ProfilePage() {
  return <UserProfile />;
}

export default ProfilePage;
