import React from "react";

const formStyle = {
  top: 0,
  left: 0,
  right: 0
};

const inputStyle = {
  width: "89%",
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
          }}
          method="POST"
        >
          <input
            style={inputStyle}
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
