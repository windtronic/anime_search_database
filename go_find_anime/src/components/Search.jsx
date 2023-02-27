import { useState } from "react"

export default function Search (props) {

const [search, setSearch] = useState=([])

    return (
        <div> 
        <div className='search-box'>
          <form className='search' />
            <input type='text'
            placeholder='anime search.....' />
        </div>
        </div>
    )
}