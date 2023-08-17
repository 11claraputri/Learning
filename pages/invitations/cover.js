import React, {useEffect, useState} from 'react';
import {CoverSatu, CoverDua} from '../../components/cover/satu';

const Cover = ({invitation, openInvitation}) => {
 switch(invitation?.selectedCover){
  case 'satu':
    <CoverSatu invitation={invitation} openInvitation={openInvitation} />
  case 'dua':
    <CoverDua invitation={invitation} openInvitation={openInvitation} />
  default:
    <CoverSatu invitation={invitation} openInvitation={openInvitation} />
 }
}

export default Cover;