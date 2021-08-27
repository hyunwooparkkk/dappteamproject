import React from 'react'
import { Link } from 'react-router-dom';
function First() {
    return (
        <div>
            ddddddddddddddddd
           
            <div><Link to="create"> 만들기 </Link></div>
            <div><Link to="signin">계정연결</Link></div>
            <Link to="market">탐색하기</Link>
            
        </div>
    )
}

export default First
