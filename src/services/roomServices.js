const getRooms = () =>   fetch('api/homecards')
.then(response => response.json());

export {getRooms};