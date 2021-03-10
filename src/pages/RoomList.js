import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {roomsSelector, getSortedRooms} from 'store/slices/roomsSlice';
import Room from 'components/Room';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Filters from 'components/Filters';

export default function RoomList() {
    const {sortedRooms, empty} =  useSelector(roomsSelector);
const dispatch = useDispatch();

    useEffect(() => {
    }, [sortedRooms]);
    
    useEffect(() => {
        dispatch(getSortedRooms());
        return () => { }
    }, [dispatch]);

    const roomList = sortedRooms.map(room => <Room key={room.id} room={room}/>);
    
    return (
        <>
         <div className="page room-list">
         <Header img="./assets/room-2.jpeg">
        <Banner title="our rooms" subtitle=""
        link="/" linkText="return home"
        >
        </Banner> 
        </Header>
        <div className="container mb-5">
        <div className="row">
        <Filters />
        </div>
       { empty && sortedRooms.length === 0 && (
        <div className="row">
            <div className="col-md-6 mx-auto text-center"><h3>No Room Matches Your Search</h3></div>
        </div>
       )}
        <div className=" row rooms-container">
                 {roomList}
         </div>
        </div>
         </div>
        </>
    )
}
