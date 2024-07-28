import { KeyboardDoubleArrowDown } from '@mui/icons-material'
import { Button, Menu, MenuItem,  } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../store/categoriesSlice';

function FilterCategoryDrawer() {

    const categories = ['Top Rated', 'Trending', 'Top Visited'];   
 const [anchorEl , setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch() 

    //this will set anchor element to whose click event is triggered
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    }
    //this will set anchor element to null
    const handleClose = ()=>{
        setAnchorEl(null);
    }




  return (
    <div className='bg-white p-1 rounded-3xl'>
        <Button
        disableRipple
        onClick={handleClick}
        variant='text'
        sx={{color: 'black', textTransform: 'none', fontSize: '1rem', fontWeight: 'bold', padding: '2px', margin: '0px', minWidth: '0px', width: '100%' ,  "&:active":{
            backgroundColor: 'transparent',
        },
        "&:hover":{
            backgroundColor: 'transparent'
        },
        "&:focus":{
            backgroundColor: 'transparent'
        }
    }}
        >
           Categories
        <KeyboardDoubleArrowDown/>        
        </Button>
        <Menu 
        id='category-drawer'
        aria-labelledby='category-drawer'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',}}
        >
            {categories.map((category,index)=>(
                <MenuItem key={index}
                onClick={()=>{
                    dispatch(addCategory(category))
                    handleClose();
                }}
                >
                    {category}
                </MenuItem>
            ))}
        </Menu>
    </div>
  )
}

export default FilterCategoryDrawer