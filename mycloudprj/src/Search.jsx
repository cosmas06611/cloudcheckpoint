import React from 'react'

const Search = () => {
  return (
    <div>
      <form > 
        <div className= 'flex justify-center'>
        <input type="text" placeholder='FRO'/>
        <input type="text" placeholder='TO' />
        <button className= 'bg-red-400'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search
