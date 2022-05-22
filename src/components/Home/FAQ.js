import React, { useState } from 'react'
import './FAQ.css'
import FAQ_question from './FAQ_data'


const FAQ = () => {

    return (
        <div className='faq'>
            <div className='faq-container'>
                <div className='title-wrapper'>
                    <p className='title-large'>Alpha</p>
                    <h3 className='h3-heading'>FAQs</h3>
                </div>
                    <FAQ_question /> 
                
            </div>
        </div>
  )
} 

export default FAQ