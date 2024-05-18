import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    favorites: [],
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Caffe Misto', image: require('../assets/CaffeMisto.jpg') },
      { id: 2, name: 'Drip Coffee', image: require('../assets/Drip_Coffee.jpg') },
      { id: 3, name: 'Capuccino', image: require('../assets/Capuccino.jpg') },
      { id: 4, name: 'Strawberry Crème Frappuccino', image: require('../assets/StrawberryCremeFrappucino.jpg') },
      { id: 5, name: 'Americano', image: require('../assets/Americano.jpg') },
      { id: 6, name: 'Espresso Machiato', image: require('../assets/EspressoMachiato.jpg') },
      { id: 7, name: 'Espresso Creme', image: require('../assets/EspressoCreme.jpg') },
      { id: 8, name: 'Iced Latte', image: require('../assets/IcedLatte.jpg') },
      { id: 9, name: 'Matcha Latte', image: require('../assets/MatchaLatte.jpg') },
      { id: 10, name: 'Classic Latte', image: require('../assets/ClassicLatte.jpg') },
      { id: 11, name: 'Banana Milk Coffee', image: require('../assets/BananaMilkCoffee.jpg') },
      { id: 12, name: 'Creamy Ice Coffee', image: require('../assets/CreamyIceCoffee.jpg') },
      { id: 13, name: 'Mocha Smoothie', image: require('../assets/MochaSmoothie.png') },
      { id: 14, name: 'Mocha Frappe', image: require('../assets/MochaFrappe.jpg') },
      { id: 15, name: 'Java Chip Frappe', image: require('../assets/JavaChipFrappe.jpg') },
      { id: 16, name: 'Dark Chocolate Frappe', image: require('../assets/DarkChocolateFrappe.jpg') },
      { id: 17, name: 'Mocha Cappuccino', image: require('../assets/MochaCappucino.jpg') },
      { id: 18, name: 'Caramel Cappuccino', image: require('../assets/CaramelCappucino.jpg') },
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, products }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
