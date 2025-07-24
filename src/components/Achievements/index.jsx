import React, { useEffect, useState } from 'react'
import "./Achievements.css"
import ReactOdometer from 'react-odometerjs'
import "odometer/themes/odometer-theme-default.css"

const Achievements = () => {
    const [projects, setProjects] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() =>{
      const timeout = setTimeout(()=>{
        setProjects(150);
        setSatisfaction(98);
        setExperience(5);

      },2000)
      return() => clearTimeout (timeout);
    },[]
    )

  return (

    <div className='achievements'>
      {/* card start */}
      <div className="achievement__card">
        <h3 className="title"> Supplied Over </h3>
        <div className="flex">
          <ReactOdometer value={projects} className='heading'/>
          <h1 className="heading">+</h1>

        </div>
        <p> Projects Completed </p>
      </div>
      {/* card end */}
  

      {/* card start */}
      <div className="achievement__card">
        <h3 className="title"> Achieved </h3>
        <div className="flex">
          <ReactOdometer value={satisfaction} className='heading'/>
          <h1 className="heading">%</h1>

        </div>
        <p> Client Satisfaction  </p>
      </div>
      {/* card end */}

            {/* card start */}
      <div className="achievement__card">
        <h3 className="title">Over</h3>
        <div className="flex">
          <ReactOdometer value={experience} className='heading'/>
          <h1 className="heading">+</h1>

        </div>
        <p> Years of Operations </p>
      </div>
      {/* card end */} 
    </div>
  )
}

export default Achievements;
