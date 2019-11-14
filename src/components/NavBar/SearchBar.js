import React from "react";
// import { thisExpression } from "@babel/types";

const formStyle = {
  top: 0,
  left: 0,
  right: 0
};

const inputStyle = {
  width: "100%",
  padding: "10px 15px"
};

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div style={formStyle} className="searchBarContainer">
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.search(this.state.term);
            this.setState({ term: "" });
          }}
          method="POST"
        >
          <input
            style={inputStyle}
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder="What are you looking for?"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
