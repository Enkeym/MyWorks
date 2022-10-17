import React, { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../../store/github/github.api'
import { useDebounce } from './../../hooks/debounce';

export function Home() {
  const [search, setSearch] = useState("")
  const debounced = useDebounce(search)
  const {isError, isLoading, data} = useSearchUsersQuery("vladilen")

  useEffect(()=> {
    console.log(debounced)
  }, [debounced])

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && <p className='text-center text-red-600'>Something went wrong...</p>}
      <div  className='relative w-[560px]'>
        <input value={search} onChange={e=> setSearch(e.target.value)} className='border py-2 px-4 w-full h-[42px] mb-2' type="text" placeholder='seatch for Github usernamme...' />
        <div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, possimus!</div>
      </div>
    </div>
  )
}

export default Home