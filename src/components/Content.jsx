import React, { useEffect, useState } from 'react'
import OfferLarge from './offerLarge'
import OfferSmall from './offerSmall';

const Content = () => {
  const [showSmall, setShowSmall] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowSmall(screenWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main>
        { showSmall 
            ? <OfferLarge />
            : <OfferSmall />
        }
    </main>
  )
}

export default Content