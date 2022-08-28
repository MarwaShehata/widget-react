import React ,{useState} from "react";

const SearchBar =({onSearchSubmit})=>{
  const [searchTerm,setSearchTerm]= useState('')
 
  const handleSearchSubmit=(e)=>{
    e.preventDefault()
    onSearchSubmit(searchTerm)
  }

  return <>
       <div className="ui segment">
          <form className="ui form" onSubmit={handleSearchSubmit} >
           <div className="field">
              <label>Search for a Video</label>
              <input
                type="text"
                onChange={(e)=>{setSearchTerm(e.target.value)}}
               value={searchTerm}
            />
           </div>
         </form>
       </div> 
  </>
}
export default SearchBar;
