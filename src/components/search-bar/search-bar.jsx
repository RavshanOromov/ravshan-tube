import { Paper, IconButton } from '@mui/material'
import { colors } from '../../constants/colors'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  { Search } from'@mui/icons-material'


const SearchBar = () => {
  const [value, setValue] = useState(' ')
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    if(value) {
      navigate(`/search/${value}`)
      setValue('')
    }
  }


  return (
   <Paper 
       component={'form'} 
       onSubmit={submitHandler}
       sx={{ border: `1px solid ${colors.secondary}`, 
       pl: 2, 
       boxShadow: 'none',
       mr: 5, }}>
     <input className='search-bar' type='text ' placeholder='Search...' value={value} onChange={e => setValue(e.target.value)} />
     <IconButton type='submit' sx={{ p: '10px', color: colors.secondary }}>
        {/* <i className='fa-solid fa-manifying-glass'> </i> */}
        < Search />
     </IconButton>
    </Paper>
  )
}

export default SearchBar