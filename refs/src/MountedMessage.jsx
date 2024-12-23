import React, { useEffect, useRef } from 'react';

function MountedMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component mounted for the first time");
      isMounted.current = true;
    }else{
        console.log('mounted for debug purposes')
    }
  }, []); 

  
};

export default MountedMessage;