import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../redux";

const UserContainer = ({userDate, fetchUsers}) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userDate.loading ? (
    <h2>Loading...</h2>
  ) : userDate.error ? (
    <h2>{userDate.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {console.log(userDate)}
      <div>
        {userDate &&
          userDate.users &&
          userDate.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    userDate: state.user,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(UserContainer);
