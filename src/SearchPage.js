import React from 'react'
import Button from '@material-ui/core/Button';
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays, 27 december to 30 december, 2 guest</p>
                <h1>Stays nearby</h1>
                
                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            
        </div>
    )
}

export default SearchPage
