export const citiesList = [
    { id: 1, name: 'Madrid' },
    { id: 2, name: 'Medellin' },
    { id: 3, name: 'Bogota' },
    { id: 4, name: 'Barcelona' },
    { id: 5, name: 'New York' },    
    { id: 6, name: 'Paris' },
    { id: 7, name: 'Rome' },
    { id: 8, name: 'Berlin' },
    { id: 9, name: 'Tokyo' },
    { id: 10, name: 'Sydney' },
];

export const getCityNameById = (id) => {
    const city = citiesList.find(city => city.id === id);
    return city ? city.name : 'Unknown City';
};
