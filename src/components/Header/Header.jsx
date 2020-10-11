import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    }
  }

  onInputChangeHandler = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h2>NekoTube</h2>
        </div>
        <div>
          <input type="text" onChange={this.onInputChangeHandler} value={this.state.keyword} />
        </div>

      </div>
    )
  }
}

export default Header
