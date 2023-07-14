import React from "react";

// Avatar houses the user that contains the necessary properties
// housing the return inside Avatar outputs all the data from the user
const Avatar = () => {
  const user = {
    name: "Christopher Robin",
    imageUrl:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ",
    imageSize: 90,
  };
  return (
    <div>
      <h1>Problem 2</h1>
      <p>{user.name}</p>
      <img src={user.imageUrl} width={user.imageSize} alt={user.name} />
    </div>
  );
};

// exports Avatar which contains all of the information and returns to display it
export default Avatar;
