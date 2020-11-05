import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [weapon, setWeapon] = useState([]);
  const dataWeapon = {
    weapon,
    setWeapon,
  };
  return <Context.Provider value={dataWeapon}>{children}</Context.Provider>;
}

export default Provider;
