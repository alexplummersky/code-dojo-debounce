import React from "react";

export function UserList({ users, loading }) {
  return (
    <ul className={"github-output"}>
      {users.map((thisUser) => (
        <li key={thisUser.id}>
          <img width="100" height="100" src={thisUser.avatarUrl} />
          {thisUser.login}
        </li>
      ))}
    </ul>
  );
}
