export const roomsTypes = [
    {
        name: 'Sencilla',
        id: 1
    },
    {
        name: 'Doble',
        id: 2
    },
    {
        name: 'Suite',
        id: 3       
    },
    {
        name: 'Familiar',
        id: 4
    },
];  

export const getTypeRoom = (id) => {
  const roomType = roomsTypes.find(room => room.id === id);
  return roomType ? roomType.name : 'Desconocido';
};