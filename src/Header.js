import React from 'react'
import './Style.css'
import Octicon, { MarkGithub, RepoForked, Star } from '@primer/octicons-react';


function Header(){
    return(
        <div>
            <ul>
                <li><a href="https://github.com/Awesome-React-Modules/React-Pincode/">View it on  <Octicon icon={MarkGithub} /></a></li>
                <li><a href="https://github.com/Awesome-React-Modules/React-Pincode/fork">Fork  <Octicon icon={RepoForked} /></a></li>
                <li><a href="https://github.com/Awesome-React-Modules/React-Pincode/stargazers">Star  <Octicon icon={Star} /></a></li>
                <li><a href="https://www.npmjs.com/package/react-pincode">NPM </a></li>
            </ul>
            <br/><br/>
        </div>
    );
}

export default Header