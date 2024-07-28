import React, { useState } from 'react';
import FilterCategoryDrawer from './FilterAreaComponents/FilterCategoryDrawer';
import FilterCategoryList from './FilterAreaComponents/FilterCategoryList';


function FilterAreaComponent() {
  

  return (
    <div className='filter-category flex  space-x-2 items-center'>
      <FilterCategoryDrawer />
      <FilterCategoryList />
    </div>
  );
}

export default FilterAreaComponent;
