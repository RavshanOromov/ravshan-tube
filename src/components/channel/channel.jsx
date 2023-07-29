import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import React from 'react'

const Channel = () => {
    const params = useParams()
  return (
    <Link to={'/'}>
    <Button>Main</Button>
    </Link>
  )
}

export default Channel