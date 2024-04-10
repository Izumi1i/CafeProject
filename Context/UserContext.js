import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState([]);
  const [userDataUpdated] = useState([]);

  useEffect(() => {
    // Simulated data for products
    const mockProducts = [
      { id: 1, name: 'Caffe Misto', price: 120, image: 'Caffee_Misto.jpg' },
      { id: 2, name: 'Drip Coffee', price: 120, image: 'Drip_Coffee.jpg' },
    ];

    // Simulated data for user
    const mockUser = {
      id: 123,
      name: 'John Doe',
      email: 'john@example.com',
      favorites: [1, 2], // IDs of favorite products
    };

    // Fetch products
    const fetchProducts = () => {
      setProducts(mockProducts);
    };

    // Fetch user data
    const fetchUserData = () => {
      setUserData(mockUser);
    };

    // Initially fetch products and user data
    fetchProducts();
    fetchUserData();

    // Set interval to update products and user data (simulated)
    const intervalId = setInterval(() => {
      fetchProducts();
      fetchUserData();
    }, 10000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, products, userDataUpdated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
