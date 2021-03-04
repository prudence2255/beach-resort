import { createSlice, createSelector} from '@reduxjs/toolkit';
import data from 'store/data';
    
/**
 * rooms reducer
 */

 const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  room: {},
  price: 0,
  capacity: 1,
  minSize: 0,
  minPrice: 0,
  maxSize: 0,
  type: "all",
  pets: false,
  breakfast: false ,
  empty: false
  },

  reducers: {
    getRooms: (state) => {
      state.rooms = data;
      let price = data.map(room => room.price);
      state.price =  Math.max(...price);
      state.maxPrice =  Math.max(...price);
      let size = data.map(room => room.size);
      state.maxSize =  Math.max(...size);
    },

    getFeaturedRooms: (state) => {
      state.featuredRooms = data.filter(room => room.featured === true);
    },

    getSortedRooms: (state) => {
    state.sortedRooms = data;
    },
   

    getRoom: (state, action) => {
      const room = data.find(room => room.slug === action.payload);
      state.room = room;
    },
 
     setFilters: (state, action) => {
    let target = action.payload;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    state[name] = value;
    let numPrice = parseInt(state.price); 
    let numCapacity = parseInt(state.capacity); 
    let tempRooms = [...state.rooms];
      /**
       * filter by type
       */
    if(state.type !== "all"){
      tempRooms = state.rooms.filter(room => room.type === state.type);
     }

     /**
      * filter by capacity
      */
    if(numCapacity !== 1){
      tempRooms = tempRooms.filter(room => room.capacity === numCapacity);
    }

     /**
      * filter by price
      */
    tempRooms = tempRooms.filter(room => room.price <= numPrice);

     /**
      * filter by size
      */

    tempRooms = tempRooms.filter(room => room.size >= state.minSize && room.size <= state.maxSize);

    /**
     * filter by breakfast
     */
    if(state.breakfast){
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    /**
     * filter by pets
     */
    if(state.pets){
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    /**
     * set set sorted rooms
     */
    state.sortedRooms = tempRooms;

    /**
     * check if no search results
     */
    if(state.sortedRooms.length === 0){
      state.empty = true;
    }else{
      state.empty = false;
    }
      }
     
  },

  extraReducers: {
   
  }

});

 export const {
getRooms,
getSortedRooms,
getFeaturedRooms,
setFilters,
getRoom,

 } = roomsSlice.actions


export const roomsSelector = createSelector(
   (state) => ({
        rooms: state.rooms.rooms,
        featuredRooms: state.rooms.featuredRooms,
        sortedRooms: state.rooms.sortedRooms,
        type: state.rooms.type,
        price: state.rooms.price,
        pets: state.rooms.pets,
        breakfast: state.rooms.breakfast,
        capacity: state.rooms.capacity,
        maxSize: state.rooms.maxSize,
        maxPrice: state.rooms.maxPrice,
        minPrice: state.rooms.minPrice,
        minSize: state.rooms.minSize,
        empty: state.rooms.empty,
        room: state.rooms.room,
    }),

    (state) => state
)

export default roomsSlice.reducer
