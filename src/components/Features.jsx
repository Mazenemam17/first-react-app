import React from 'react'
import featureimage from '../images/Frame 19.png'

const Features = () => {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image' />
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software</span> is Art</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid magni dolor molestiae. Error culpa vero ullam porro corrupti odio,
            doloribus omnis quas, ex in eius natus repellendus quasi quia quidem, aperiam facilis!
            Consequuntur cupiditate quae porro at esse culpa aliquid.
            </p>
            <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features