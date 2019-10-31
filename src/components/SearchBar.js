import React from "react";
import "./MapView.css";

const formStyle = {
  height: "25%"
};

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} style={formStyle}>
          <div>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
