// This file contains utility functions for the application
// Function to format a number to two decimal places

/**
 * @param {Array}products - Array of product objects
 * @returns {number} - The total price of all products in the array
 * 
 **/



export const totalPrice = (products) => {
       let sum=0;
       products.forEach(product => sum += product.price);
          return sum;
          }