import React from 'react'
import '../App.css'
import { Search } from '@styled-icons/boxicons-solid/Search'

function SearchComponent() {
  return (
    <div className="search">
      <button>
        <Search style={{ width: '16px', color: 'rgba(231, 231, 231, 1)' }} />
      </button>
      <input placeholder="...جستجو" type="text" />

    </div>
  )
}

export default SearchComponent
