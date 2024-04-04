import React from 'react';
import s from './styles.module.scss';

import { RiRobot2Line } from "react-icons/ri";
import { LiaUserAltSolid } from "react-icons/lia";

const Message = ({message, response}) => {
  return (
    <div className={response ? s.response : s.container}>
        <div className={s.logo}>
            {
                response ? <RiRobot2Line/> : <LiaUserAltSolid/>
            }
        </div>
        <div className={s.message}>
            {message}
        </div>
    </div>
  )
}

export default Message