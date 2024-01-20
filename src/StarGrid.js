// StarGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StarGrid.css';

const StarGrid = ({ stars }) => {
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
                                <div className="star-title">{star.title}</div> {/* Title above the image */}
                                <img src={star.photo} alt={`Star ${index + 1}`} className="star-photo" />
                                <div className="star-text-container"> {/* Text below the image */}
                                    <p className="star-text-left">Tel. +49-123-456</p>
                                    <p className="star-text-right">
                                        Min. ${star.price ? star.price.toFixed(2) : 'N/A'}
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

