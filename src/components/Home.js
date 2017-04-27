import React from 'react'
import { PageHeader } from 'rebass'
import WordOfTheDay from './WordOfTheDay'

const Home = () =>
  <div className='Home'>
    <PageHeader
      heading='Welcome to the Jabberdexicon'
      description='A glossary of tech terms'
      m={1}
    />
    <WordOfTheDay />
  </div>

export default Home
