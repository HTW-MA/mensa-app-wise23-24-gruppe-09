import React from 'react';
import { Link } from 'react-router-dom';
import './StarGrid.css';


const StarGrid = ({ stars, searchResults }) => {
    console.log('searchResults in StarGrid:',searchResults);
    if (Array.isArray(searchResults) && searchResults.length > 0) {
        console.log('searchResults is an array:', searchResults);
        // Access the name property of the first element in the array
        const firstName = searchResults[0].name;
        console.log('Name der Mensa:', firstName);
    } else if (typeof searchResults === 'object' && searchResults !== null) {
        // Check if searchResults is an object
        console.log('searchResults is an object:', searchResults);
        // Access the name property directly
        const firstName = searchResults.name;
        console.log('Name der Mensa:', firstName);
    } else {
        // Fallback if searchResults is neither an array nor an object
        console.log('searchResults has an unexpected type:', searchResults);
    }
    return (
        <div className="star-grid-container">
            <div className="star-grid">
                {stars.map((star, index) => (
                    <Link key={index} to={{
                        pathname: `/details/${star.title}`,
                        state: { imageUrl: star.photo }
                    }} className={`star-item-link ${star.border ? 'with-border' : ''}`}>
                        <div className="star-item">
                            <div className="star-item-wrapper">
                                <div className="star-title">
                                    {searchResults ? searchResults.name : 'Mensa ASH Berlin Hellersdorf'}
                                </div>
                                <img src={star.photo} alt={`Star ${index + 1}`} className="star-photo" />
                                <div className="star-text-container">
                                    <p className="star-text-item">
                                        {searchResults ? searchResults.street : 'Alice-Salomon-Platz 5'}
                                    </p>
                                    <p className="star-text-item">
                                        {searchResults ? searchResults.city : 'Berlin'}
                                    </p>
                                    <p className="star-text-item">
                                        {searchResults ? searchResults.zipcode : '12627'}
                                    </p>
                                    <p className="star-text-item">
                                        {searchResults ? searchResults.district : 'Marzahn-Hellersdorf'}
                                    </p>
                                    <p className="star-text-item">
                                        {searchResults ? searchResults.phone : '+4930939397721'}
                                    </p>
                                    <p className="star-text-item">
                                        {searchResults ? searchResults.email : 'mensen@stw.berlin'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StarGrid;