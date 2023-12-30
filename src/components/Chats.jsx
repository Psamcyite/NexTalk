import React from 'react';
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from '../firebase';

const Chats = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();

        navigate.push('/');
    }
  return (
    <div className='chats-page'>
        <div className='nav-bar'>
            <div className='logo-tab'>
            Nextalk
            </div>
            <div onClick={handleLogout} className='logout-tab'>
            Logout
            </div>
        </div>
        <ChatEngine 
            height='calc(100vh - 66px)'
            projectID='16b3e3f6-5154-4e9d-841c-d2f1c11694fe'
            userName='.'
            userSecret='.'
        />

    </div>
  );
}

export default Chats;