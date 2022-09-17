import React, {useState, useEffect} from 'react'
import FilterSearch from '../Components/FilterSearch'
import JobsCardContainer from '../Components/JobsCardContainer'
import axios from 'axios'

function HomePage({switchTheme}) {
  const [jobsData, setJobsData] = useState([])
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [fulltime, setFulltime] = useState(false)
  const [limit, setLimit] = useState(9)


  let newPeople = jobsData.filter(function (obj) {
    // 👇 testing whether the properties match the criteria
    if(fulltime === true) {
      return obj.position.toLowerCase().includes(title) && obj.location.toLowerCase().includes(location) && obj.contract === "Full Time"
    } else {
      return obj.position.toLowerCase().includes(title) && obj.location.toLowerCase().includes(location) && obj.contract
    } 
  });

  const handleSearch = (title, location, fulltime) => {
    setTitle(title)
    setLocation(location)
    setFulltime(fulltime)
   
  }
  const LoadMore = () => {
  getJobsData(limit+6)
   setLimit(limit+6)
  }

  async function getJobsData(a=limit) {
    try {
      const response = await axios.get('/data.json')
      setJobsData(response.data.slice(0,a))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJobsData()
  }, [])

  return (
    <>
    <div className={switchTheme ? 'page dark' : 'page'}>
      <div className='homepage'>
        <FilterSearch switchTheme={switchTheme} jobsData={jobsData} handleSearch={handleSearch}/>
        <JobsCardContainer switchTheme={switchTheme} newPeople={newPeople} />
        <div className='loadMore'>
          <button onClick={LoadMore}>Load more</button>
        </div> 
      </div>
    </div>
    </>
  )
}

export default React.memo(HomePage);