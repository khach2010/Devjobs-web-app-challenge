import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import '../styles/detailPage.scss'

function DetailPage({switchTheme}) {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 640) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  const locationData = useLocation();

  const {company, logo, logoBackground, position, postedAt, contract, location, apply, description, requirements, role, website} = locationData.state.job

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  },[])


  return (
     <div className={switchTheme ? 'page dark' : 'page'}>
      <div className={switchTheme ? 'detailPage dark' : 'detailPage' }>
          <div className={!isMobile ? "detailPageInfo desktop" : "detailPageInfo"}>
            <img className='detailPageInfo-logo' style={{ backgroundColor: logoBackground }}  src={`.${logo}`} alt={company} />
            <div className='detailPageInfo-info'>
              <div>
                <h3>{company}</h3>
                <p>{company}.com</p>
              </div>
            
              <button onClick={() => window.location.href = website}>Company Site</button>
            </div>
          </div>
          <div className={!isMobile ? "detailPageContent desktop" : "detailPageContent"}>

            <div className="detailPageContent-header">
              <div className='detailPageContent-header_jobTime'>
                  <p>{postedAt}</p> 
                  <p>.</p>
                  <p>{contract}</p>
              </div>
              <h3 className='detailPageContent-header_jobTitle'>
                {position}
              </h3>
              <p className='detailPageContent-header_jobLocation'>{location}</p>
            </div>

            <div className="detailPageContent-applyButton">
              <button onClick={() => window.location.href = apply}>Apply Now</button>
            </div>

            <div className="detailPageContent-description">
              <p>{description}</p>
            </div>

            <div className="detailPageContent-requirement">
              <h4>Requirements</h4>
              <p>{requirements.content}</p>
              <ul>{requirements.items.map((item) => (
                <li key={company+item}> <p>{item}</p></li>
              ))}</ul>
            </div>

            <div className="detailPageContent-whatyouwilldo">
              <h4>What You Will Do</h4>
                <p>{role.content}</p>
                <ol>{role.items.map((item, id) => (
                  <li key={id+company+item}> <p>{item}</p></li>
                ))}</ol>
            </div>
          </div>

          <div className={!isMobile ? "detailPageFooter desktop" : "detailPageFooter"}>
            <div className='detailPageFooter-title'>
              <h3>{position}</h3>
              <p>{company}</p>
            </div>
            <button onClick={() => window.location.href = apply}>Apply Now</button>
          </div>
          
      </div>
    </div>
    
  )
}

export default DetailPage