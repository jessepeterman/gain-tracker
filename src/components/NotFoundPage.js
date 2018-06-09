import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => (
  <div>
    Not found! <Link to="/dashboard">Go Home</Link>
  </div>
);

export default NotFoundPage;