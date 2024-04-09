import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Test Name",
        location: "Test Location",
        avatar_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB72HbGv3nhsI3V2ilNlk9cCp0LQrPzzzZ0lOXhfBfaA&s",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="img"></img>
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClassComponent;
