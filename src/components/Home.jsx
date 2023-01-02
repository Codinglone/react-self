import React, {useContext} from 'react'
import {NameContext} from "../App";


const Home = () => {
    const names = useContext(NameContext);
  return (
    <div>
        {names}
    </div>
  )
}

export default Home