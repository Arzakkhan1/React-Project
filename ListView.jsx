import React, { useEffect, useState } from 'react'

const ListView = ({listData}) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);


          // update filter data when we use input box
      useEffect(() => {
      
        setFilteredData(
          listData.filter((item) =>{
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
          })
        )
      },[searchTerm , listData])

      const onSearch = (event) =>{
        setFilteredData(listData);
        setSearchTerm(event.target.value);
    }



  return (
    <div>
      <div className='container'>
      <form> 
        <input type="text" value={searchTerm} onChange={onSearch} name="" id="" placeholder='Search here'/>
         <br/>
      </form>
      </div>
      <ul>
      {
        filteredData.map((item, index) => {
          return(
             <div key={index} className='listStyle'>
                <li>Name : {item.name}</li>
                <li> Author : {item.author}</li>
                <li>Published : {item.published}</li>
                <li><a href={item.link}>View as PDF </a></li>
             </div>
          )
        })
      }
     </ul>
    </div>
  )
}

export default ListView
