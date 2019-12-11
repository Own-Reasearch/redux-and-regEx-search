import React, { useState } from 'react';
function SearchComponent(props) {
    const [keyword, setKeyword] = useState('')
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.onUserInput(keyword);
        }}> 
        <div>
            <input type="search" value={keyword} onChange={(e)=>setKeyword(e.target.value)} name ="search" />
            <button type="submit">search</button>
        </div>
        </form>
    )
}

export default SearchComponent;