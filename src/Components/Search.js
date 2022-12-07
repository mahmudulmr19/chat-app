import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
