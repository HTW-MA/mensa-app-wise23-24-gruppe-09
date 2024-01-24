// StarGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StarGrid.css';

const StarGrid = ({ stars }) => {
    console.log(stars);
    return (
        <div className="star-grid-container">
            <div className="star-grid">
                {stars.map((star, index) => (
                    <Link key={index} to={{
                        pathname: `/details/${star.title}`,
                        state: { imageUrl: star.photo } // Pass the image URL in the state
                    }} className={`star-item-link ${star.border ? 'with-border' : ''}`}>
                        <div className="star-item">
                            <div className="star-item-wrapper">
                                <img src={star.photo} alt={`Star ${index + 1}`} className="star-photo" />
                                <div className="star-title">{star.title}</div>
                                <div className="star-text-container">
                                    {/* Render additional properties dynamically */}
                                    {Object.keys(star).map((key, innerIndex) => (
                                        // Exclude photo, border, title, and other specific properties
                                        !['photo', 'border', 'title'].includes(key) && (
                                            <p key={innerIndex} className="star-text-left">{`${key}: ${star[key]}`}</p>
                                        )
                                    ))}
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