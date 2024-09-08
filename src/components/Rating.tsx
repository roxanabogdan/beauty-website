import React from "react";

export const Rating = ({ rating = 4.5, totalReviews = 20, reviewLink = "#" }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div className="flex flex-wrap  justify-center w-full items-center p-5">
            <div> {rating}/5 </div>
            {[...Array(fullStars)].map((_, index) => (
                <svg key={`full-${index}`} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            ))}
            {halfStar === 1 && (
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M11 17.033L6.482 19.408a1.532 1.532 0 0 1-2.226-1.617l.863-5.03-3.656-3.563a1.535 1.535 0 0 1-.387-1.575l5.051-.734 2.259-4.577a1.534 1.534 0 0 1 2.752 0l2.259 4.577 5.051.734a1.523 1.523 0 0 1 1.238 1.044 1.523 1.523 0 0 1-.387 1.575l-3.656 3.563.863 5.03a1.534 1.534 0 0 1-2.226 1.617L11 17.033zM11 8.38l.618 1.251 1.382.2-1 0.974.237 1.38L11 11.618l-1.237.767.237-1.38-1-0.974 1.382-.2L11 8.38z" />
                </svg>
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <svg key={`empty-${index}`} className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            ))}
            <a href={reviewLink} className="ms-2 text-sm text-blue-500 hover:underline">
                {totalReviews} reviews
            </a>
        </div>
    );
};
