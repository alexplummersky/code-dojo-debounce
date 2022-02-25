import React from "react";

export function UserList({ users }) {
  return (
    <ul className={"github-output"}>
      {users.map((thisUser) => (
        <li key={thisUser.id}>
          <img alt="gravatar" src={thisUser.avatarUrl} />
          <p>{thisUser.login}</p>
        </li>
      ))}
    </ul>
  );
}
