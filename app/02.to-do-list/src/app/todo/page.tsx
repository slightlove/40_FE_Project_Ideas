import React from 'react'
import Container from '@mui/material/Container'
import Header from '@/Components/Header'
import { HEADER_LIST } from '@/constants'

export default function Todo() {
  return (
    <Container>
      <Header items={HEADER_LIST} />
      <h1>Todo</h1>
    </Container>
  )
}
