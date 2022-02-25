import React, { useState, useEffect } from "react";

import { UserList } from "./UserList";
import { SearchBox } from "./SearchBox";

import { getUsers } from "../services/get-users-service";

export const UserContainer = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState();
  const [retrievedUsers, setRetrievedUsers] = useState([]);

  useEffect(async () => {
    if (currentSearchTerm) {
      const response = await getUsers(currentSearchTerm);

      setRetrievedUsers(response.data.search.edges.map((x) => x.node));
    }
  }, [currentSearchTerm]);

  return (
    <>
      <SearchBox setSearchQuery={setCurrentSearchTerm} />
      <UserList users={retrievedUsers} />
    </>
  );
};
