import React from 'react'
import CountriesTable from './components/CountriesTable'
import axios from 'axios';

function App() {


  return (
    <>
    <div className='d-flex flex-column align-items-center'>

      <h1>React Datatable</h1>
    </div>
    <CountriesTable/>
    </>
  )
}

export default App