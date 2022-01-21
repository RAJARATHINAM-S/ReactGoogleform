import React from 'react';
import Addtask from '../addtask/addtask';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';

const Archive = () => {
    return (
        < >
            
            
            <Navbar/>
            <Sidebar/>
            <div className="addtask">
        <h3>Your Achived Notes Appear Here</h3>
      </div>
        </>
    );
};

export default Archive;