import React from "react";
import Users from "../components/Users";
import { UsersProps } from "../public/types";

const User = (props: { users: UsersProps[] }) => {
  return (
    <div>
      <h1>List of users</h1>
      <br />
      <Users users={props.users} />
    </div>
  );
};

export default User;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UsersProps[] = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
