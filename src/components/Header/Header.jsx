import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      isComposed: false,
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler = (e) => {
    e.preventDefault();
    this.props.onKeywordChanged(this.state.keyword);
  };

  render() {
    return (
      <nav className='navbar navbar-expand navbar-light bg-light mb-3 p-3'>
        <h2 className='mb-0'>
          <span className='bg-dark text-white p-2 mr-2'>猫</span>
          <span className='d-none d-md-inline'>NekoTube</span>
        </h2>
        <form className='form-group my-2 my-lg-0 ml-sm-2 '>
          <input
            value={this.state.keyword}
            onChange={(e) => {
              this.setState({ keyword: e.target.value });
            }}
            className='form-control form-control-lg mr-sm-2'
            type='text'
            placeholder='検索...'
            aria-label='検索...'
            onKeyDown={(e) => {
              //日本語入力中ならこれ以降の処理はしない
              if (this.state.isComposed === true) return;

              if (e.key === 'Enter') {
                this.onInputChangeHandler(e);
              }
            }}
            //日本語入力が始まったときに実行される（変換を確定するのにEnter押してもstate確定させない処理）
            onCompositionStart={() => {
              this.setState({ isComposed: true });
            }}
            //日本語入力が終わったときに実行される
            onCompositionEnd={() => {
              this.setState({ isComposed: false });
            }}
          />
        </form>
      </nav>
    );
  }
}

export default Header;
