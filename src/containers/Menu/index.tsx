import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Link, useLocation } from 'react-router-dom';


const linkStyle = { 
  fontFamily: 'GTAmericaBold',
  color: 'white', 
  textDecoration: 'none', 
  padding: 15, 
  backgroundColor: '#fa4616',
  borderRadius: 3,
};

function MenuContainer() {

  const location = useLocation();

  const auth = useSelector((state: any) => state.firebase.auth);

  if (location.pathname.includes('login')) return null;

  if (!isLoaded(auth)) return null;

  console.log(auth);

  return (
    <div style={{ position: 'fixed', top: 50, right: 50 }}>
      {!isEmpty(auth) ? (
        <Link style={linkStyle} to="/submit">Submit a Cheer</Link>
      ): (
        <Link style={linkStyle} to="/login">Sign in to give a Cheer</Link>
      )}
    </div>
  );
}

export default MenuContainer;
