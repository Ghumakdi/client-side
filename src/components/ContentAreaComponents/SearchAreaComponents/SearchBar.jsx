import React from 'react';
import Button from '../../Button';

function SearchBar() {
    const [text, setText] = React.useState('');

    const handleOnClick = () => {
        console.log('clicked searched term is :', text);
    };

    return (
        <div className='flex p-0 h-12 mt-4 w-[100%]'>
            <input 
                type="text" 
                className='w-[80%]  bg-white text-black text-lg h-full p-4 rounded-s-xl focus:outline-none' 
                placeholder='Search for hotels, places, restaurants' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            
            <Button text='Search' onClick={handleOnClick} styles="h-full w-[20%] rounded-e-xl"/>

        </div>
    );
}

export default SearchBar;
