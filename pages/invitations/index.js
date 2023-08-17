import React, {useEffect, useState} from 'react';
import Cover from './cover.js';
import Detail from './detail.js';

const Invitation = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [invitation, setInvitation] = useState({});

  useEffect(() => {
  //consume api get invitation by url params(nama mempelai)
  //setInvitation()
  }, []);

  return (
    isFirstRender ? <Cover invitation={invitation} openInvitation={() => setIsFirstRender(false)} /> : <Detail invitation={invitation} />
  );
}

export default Invitation;