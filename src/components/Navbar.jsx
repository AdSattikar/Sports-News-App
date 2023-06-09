import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearchQueryChange(this.state.input); // Pass the search query to the parent component
    this.setState({ input: this.state.input })
    console.log("Submit clicked"); // Clear the input field after submitting
  };
  render() {
    return (
      <div><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Sports Tak</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item"><NavLink className="nav-link" to="/US">USA</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/UK">UK</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/Germany">Germany</NavLink></li>

            </ul>
            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav></div>
    )
  }
}

export default Navbar