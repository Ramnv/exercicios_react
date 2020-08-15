import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
        <Family lastName='Velasco'>
            <Member name='Ramon' lastName='Velasco' />
            <Member name='Sofia' />
            <Member name='Palmira' />
        </Family>
    , document.getElementById('app'))