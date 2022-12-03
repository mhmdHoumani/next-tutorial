import Link from "next/link";
import React from "react";
import { UsersProps } from "../public/types";

const Users = (props: { users: UsersProps[] }) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>
            <b>Works in</b> {user.company.name}
          </p>
          <p>
            <b>Lives in</b> {user.address.city} - {user.address.street} street
          </p>
          <p>
            <b>Website: </b>
            <Link href={`https://${user.website}`} passHref target="_blank">
              {user.website}
            </Link>
          </p>
          <br />
        </li>
      ))}
    </ul>
  );
};

export default Users;
