import React from 'react';

export default class MessageBoardPostForm extends React.Component{
  state = {
    title: 'Enter your title or subject here',
    body: 'Enter your message here'
  };

  onTitleChange = (e) => {
    this.setState({title: e.target.value});
  };
  onBodyChange = (e) => {
    this.setState({body: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    // addPost
  };
  render() {
    return(
      <div className="content-container">
        <h3>New Messageboard Post</h3>
        <form onSubmit={this.onSubmit} className="messageboard--form">
          Title: <input type="text" value={this.state.title} placeholder="" onChange={this.onTitleChange} />
          Body: <textarea value={this.state.body} onChange={this.onBodyChange}/>
          <input className="button button--medium" type="submit" />
        </form>
      </div>
    );
  }
}
// export default MessageBoardPostForm;