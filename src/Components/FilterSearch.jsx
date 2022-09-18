import React, {useState, useEffect} from 'react'
import '../styles/filterSearch.scss'
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';

function FilterSearch({switchTheme, handleSearch}) {
  const [titleSearch, setTitleSearch] = useState('')
  const [locationSearch, setLocationSearch] = useState('')
  const [fulltimeSearch, setFulltimeSearch] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTable, setIsTable] = useState(false)
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleResize = () => {
    if (window.innerWidth < 640) {
        setIsMobile(true)
        setIsTable(false)
    } else if (window.innerWidth > 640 && window.innerWidth < 1145) {
        setIsMobile(false)
        setIsTable(true)
    } else {
        setIsMobile(false)
        setIsTable(false)
    }
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(titleSearch, locationSearch, fulltimeSearch)
    setTitleSearch('')
    setLocationSearch('')
    setFulltimeSearch(false)
  }

  const handleChange = event => {
    if (event.target.checked) {
      setFulltimeSearch(true)
    } else {
      setFulltimeSearch(false)
    }
  };


  useEffect(() => {
    window.addEventListener("resize", handleResize)
    if (window.innerWidth < 640) {
      setIsMobile(true)
      setIsTable(false)
  } else if (window.innerWidth > 640 && window.innerWidth < 1145) {
      setIsMobile(false)
      setIsTable(true)
  } else {
      setIsMobile(false)
      setIsTable(false)
  }
  },[])
  
  if(isMobile) {
    return (
      <div className={switchTheme ? 'filterSearch dark' : 'filterSearch'}>
        <div className='filterSearch-title'>
          <input value={titleSearch} type="text" placeholder='Filter by title…' 
          onChange={(event) => setTitleSearch(event.target.value)}/>

            <button onClick={onOpenModal} className='filterIcon'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z" fill={!switchTheme ? "#6E8098" : "white"}/>
              </svg>
            </button>

            <Modal open={open} onClose={onCloseModal} center  classNames={{
                modal: switchTheme ? 'customModal-dark' : 'customModal-light',
              }}>

              <div className={switchTheme ? 'filterSearch-location dark' : 'filterSearch-location'}>
                <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.44769 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44769 23.894L1.75056 14.2119C-0.748005 10.8781 -0.384902 5.37556 2.53692 2.45105C4.11574 0.870546 6.21459 0 8.44769 0ZM5.47356 8.29091C5.47356 9.97484 6.84271 11.3455 8.52484 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52484 5.23636C6.84271 5.23636 5.47356 6.60698 5.47356 8.29091Z" fill="#5964E0"/>
                </svg>                
                <input value={locationSearch} type="text" placeholder='Filter by location…' 
                onChange={(event) => setLocationSearch(event.target.value)}/>
              </div>
            
              <div className={switchTheme ? 'filterSearch-fulltime dark' : 'filterSearch-fulltime'}>
                <label className="filterSearch-fulltime-container">
                  <input type="checkbox" value={fulltimeSearch}
                  onChange={handleChange}/>
                  <span className="checkmark"></span>
                  {isTable ? 'Full Time' : 'Full Time Only'} 
                </label>    
              </div>
              
              <button type='submit' onClick={handleSubmit} >Search</button>
             
            </Modal>
   
            <button onClick={handleSubmit} className='searchIcon'>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="5" fill="#5964E0"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z" fill="white"/>
              </svg>
            </button>
      
        </div>
      </div>
    )
  } else {
    return (
      <div className={switchTheme ? 'filterSearch dark' : 'filterSearch'}>
        
        <div className='filterSearch-title'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z" fill="#5964E0"/>  
          </svg>
          <input value={titleSearch} type="text" placeholder='Filter by title…' 
          onChange={(event) => setTitleSearch(event.target.value)}/>
        </div>
  
        <div className='filterSearch-location'>
          <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.44769 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44769 23.894L1.75056 14.2119C-0.748005 10.8781 -0.384902 5.37556 2.53692 2.45105C4.11574 0.870546 6.21459 0 8.44769 0ZM5.47356 8.29091C5.47356 9.97484 6.84271 11.3455 8.52484 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52484 5.23636C6.84271 5.23636 5.47356 6.60698 5.47356 8.29091Z" fill="#5964E0"/>
          </svg>                
          <input value={locationSearch} type="text" placeholder='Filter by location…' 
          onChange={(event) => setLocationSearch(event.target.value)}/>
        </div>
  
        <div className='filterSearch-fulltime'>
          <label className="filterSearch-fulltime-container">
            <input type="checkbox" value={fulltimeSearch}
            onChange={handleChange}/>
            <span className="checkmark"></span>
            {isTable ? 'Full Time' : 'Full Time Only'} 
          </label>    
          <button type='submit' onClick={handleSubmit} >Search</button>
        </div>

      </div>
    )
  }
  
}

export default React.memo(FilterSearch);