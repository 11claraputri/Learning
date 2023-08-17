import React, {useEffect, useState} from 'react';
import {ThemeSatu, ThemeDua, ThemeCustom} from '../../components/themes';

const Detail = ({invitation, openInvitation}) => {
 switch(invitation?.selectedTheme){
  case 'satu':
    <ThemeSatu invitation={invitation} />
  case 'dua':
    <ThemeDua invitation={invitation} />
  case 'custom':
    <ThemeCustom invitation={invitation} />
  default:
    <ThemeSatu invitation={invitation} />
 }
}

export default Detail;