import React from 'react';
import {Link} from 'react-router-dom';
import MessageBoardList from './MessageBoardList';

const MessageBoardPage = () => (
    <div className="content-container">
      <Link className="button--green" to="/messageboard/create">New Message</Link>
      <div className="messageboard--header">
        <h2>Message Board</h2>
        <p>A place to ask questions, share progress updates, supplement recommendations or discuss anything related to weight-lifting</p>
      </div>
      <MessageBoardList />
    </div>
);

export default MessageBoardPage;