import React from "react";

class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  async getUsersList() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      this.setState({ users }, () => {
        console.log(this.state.users);
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getUsersList();
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <ol>
          {users.map((user) => (
            <li>
              <h1>{user.name}</h1>
              <p>Username : {user.username}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default UsersClass;
