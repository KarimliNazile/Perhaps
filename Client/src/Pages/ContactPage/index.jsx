import React from 'react'
import Header from '../../components/ContactComponents/HeaderContact'
import Consultation from '../../components/ContactComponents/TwoSectContact'
import Common from '../../components/ContactComponents/CommonContact'

const Contact = () => {
  return (
    <div>
      <Header/>
      <Consultation/>
      <Common/>
    </div>
  )
}

export default Contact