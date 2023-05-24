import React, { useState } from 'react';
import { ReactComponent as Cards } from '../../assets/productsDisplayType1.svg';
import { ReactComponent as List } from '../../assets/productsDisplayType2.svg';
import { ReactComponent as ChevronSideIcon } from '../../assets/chevronSideIcon.svg';
import { ReactComponent as ChevronDownIcon } from '../../assets/chevronDownIcon.svg';

const Header = () => {
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);
  const toggleTypeFilter = () => {
    setIsTypeFilterOpen(!isTypeFilterOpen);
  };

  const handleFilterChange = () => {

  }
  
  return (
    <></>
  )
};

export default Header;