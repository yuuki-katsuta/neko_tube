import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    }
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this)
  }

  onInputChangeHandler = (e) => {
    //e.target.valueはinputでの入力値
    this.setState({ keyword: e.target.value })
    //onKeywordChangeHandler()の引数にinputの入力値であるe.target.valueを指定する
    this.props.onKeywordChanged(e.target.value)
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light mb-3 p-3" >
        <h2 className="mb-0" >
          <span className="bg-dark text-white p-2 mr-2">猫</span>
          <span className="d-none d-md-inline">NekoTube</span>
        </h2>
        <form className="form-group my-2 my-lg-0 ml-sm-2 ">
          <input
            onChange={this.onInputChangeHandler} value={this.state.keyword}
            className="form-control form-control-lg mr-sm-2" type="text" placeholder="検索..." aria-label="検索..." />
        </form>
      </nav>
    )
  }
}

export default Header
