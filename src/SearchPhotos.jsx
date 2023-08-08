// api key - kPb5jtpWd88lHwlqBPvC5VlYz0d4kMW2Ado8vQ5TpIo
// api - https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=kPb5jtpWd88lHwlqBPvC5VlYz0d4kMW2Ado8vQ5TpIo

import React, { useState } from 'react'
import axios from 'axios'


const SearchPhotos = () => {
    
    const [imgs,setimgs] = useState([]);
    const [searchText,setSearchText] = useState('');
    const [error,setError] = useState('');

    const searchimgs = () =>{
        axios
        .get(`https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=kPb5jtpWd88lHwlqBPvC5VlYz0d4kMW2Ado8vQ5TpIo`)
        .then(res => {
            // console.log(res.data.results[0].urls.raw);
            console.log(res.data.results);
            console.log(res.data.results.length);
            if(res.data.results.length == 0){
                setError("No image found. Try again!");
                setimgs([])
            }
            else{
                setError("");
                setimgs(res.data.results)
            }
        })
        .catch(err => {
            alert("An error occured")
        })
    }

  return (
    <section className='mx-auto max-w-[1280px]'>

        <div>
            <h1 className='font-bold mt-4 text-4xl sm:text-6xl text-center text-blue-500'>Search images with API</h1>
        </div>

        <div className='flex justify-center items-center mt-6'>
            <input className=' bg-transparent border-black border p-2' type="text" placeholder='Search images..' value={searchText}
            onChange={(event)=> setSearchText(event.target.value)}/>
            <button className='border-black  border p-2' type='search'
            onClick={searchimgs}
            >
                Search
            </button>
        </div>

        <div>
            <h1 className=' mt-8 text-3xl text-center'>Search Result</h1>

            <h2 className='mt-8 text-2xl text-[#ff2f2f] text-center'>{error}</h2>

            <div className='flexCenter flex-wrap sm:m-6 mt-6'>
                {
                    imgs.map((potos) => {
                        return(
                            <div key={potos.id}>
                                <img src={potos.urls.raw} alt="unsplash imgs" className='w-[220px] h-auto sm:h-[300px] sm:w-auto bg-cover bg-center m-4'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default SearchPhotos