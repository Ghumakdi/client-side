import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from '../../../store/categoriesSlice'
import { BiCross } from 'react-icons/bi';
import CloseIcon from '@mui/icons-material/Close';

function FilterCategoryList() {
 const selectedCategories = useSelector((state)=> state.categories);
 const dispatch = useDispatch();

 const categoryTileColors = {
    'Top Rated': 'bg-blue-500',
    'Trending': 'bg-red-500',
    'Top Visited': 'bg-green-500'
 }
  
 const handleCrossCategory = (category)=>{
    dispatch(removeCategory(category));
 }



  return (
    <div className='flex space-x-2'>
      {selectedCategories.map((category,index)=>(
        <div 
        key={index}
        className={`${categoryTileColors[category]} p-[6px] rounded-2xl flex items-center space-x-2`}>
          <span className='text-white cursor-pointer text-xs font-semibold'
          >{category}</span>
            <CloseIcon
            fontSize='small' 
            className='text-white cursor-pointer text-xs '
                onClick={()=>handleCrossCategory(category)} 
            />     
           </div>
      ))}

    </div>
  )
}

export default FilterCategoryList