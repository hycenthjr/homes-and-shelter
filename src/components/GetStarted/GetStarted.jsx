import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <sapn className="primaryText">Get Started With Shelter</sapn>
                <sapn className="secondaryText">Subscribe and receive super-affordable price quotations from us.
                <br />
                Find a place to live as quickly as possible.
                </sapn>
                <button className='button'>
                    <a href="">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted