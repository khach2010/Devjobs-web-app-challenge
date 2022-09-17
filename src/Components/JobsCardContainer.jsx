import React from 'react'
import '../styles/jobsCardContainer.scss'
import { useNavigate } from "react-router-dom";

function JobsCardContainer({switchTheme, newPeople}) {
  let navigate = useNavigate();
  const moreDetailPage = (job) =>  {
    navigate(`/detail/${job.id}`, {state: {job}})
  }

  const myView = newPeople.map((job) => {
    const {id, company, logo, logoBackground, position, postedAt, contract, location} = job
      return (
        <div key={id+company} className={switchTheme ? 'JobCard container dark' : 'JobCard container'} onClick={() => moreDetailPage(job)}>
            <img className='JobCard_logo' style={{ backgroundColor: logoBackground }}  src={`.${logo}`} alt={company} />
            <div className='JobCard_container'>
              <div>
                <div className='JobCard_postedAt_contract'>
                  <p>{postedAt}</p> 
                  <p>.</p>
                  <p>{contract}</p>
                </div>
                <h3 className='JobCard_position'>{position}</h3>
                <p>{company}</p>
              </div>
              <div>
                <p className='JobCard_location'>{location}</p>
              </div>
            </div>
            
        </div>
      )
  })


  return (
    <div className='JobsCardContainer container'>
      {newPeople.length === 0 ? 'there is no search results' : myView}
    </div>
  )
}

export default React.memo(JobsCardContainer);