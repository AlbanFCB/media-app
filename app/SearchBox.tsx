'use client'
import React, { FormEvent } from 'react'
import {useState} from "react"

function SearchBox() {

    const [input, setInput] = useState("");
    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
    }

  return (
    <form 
     className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input 
      onSubmit={handleSearch}
      type="text"
      value={input}onChange={(e) => setInput(e.target.value)}
      placeholder="Search Keywords ..."
      className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
      />
      
      <button 
      type="submit"
      disabled={!input}
      className="text-orange-400 disabled:text-gray-400"
      >
        Search 
      </button>
    </form>
  )
}

export default SearchBox
