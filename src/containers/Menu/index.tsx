import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';


function MenuContainer() {

  const auth = useSelector((state: any) => state.firebase.auth);
  if (!isLoaded(auth)) return null;

  console.log('auth', auth);

  return null;
}

export default MenuContainer;
