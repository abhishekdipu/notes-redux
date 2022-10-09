import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {fetchUsers} from "../features/user/userSlice";

const User = () => {
  const {loading, users, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of User</h2>
      {loading && <div>loading...</div>}
      {!loading && error ? <div>Error : {error}</div> : null}
      {!loading && users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default User;
