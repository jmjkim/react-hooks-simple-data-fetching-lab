// create your App component here

import React, { useState, useEffect } from 'react'

const App = () => {
    const [imgOfDog, setImgOfDog] = useState(null);

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random");
                const data = await response.json();

                setImgOfDog(data);
            } catch (error) {
                alert(error.message);
            }
        }
            return fetchDog();
            
        }, [])
        
        if (!imgOfDog) return <p>Loading...</p>;

    return (
      <div>App
          <img src={imgOfDog.message} alt="A Random Dog" />
      </div>
    )
}

export default App;