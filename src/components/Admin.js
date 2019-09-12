import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

const Admin = (props) => {
  console.log(props.currentRouterPath);
  return (
    <div>
      <h2>Admin</h2>
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
