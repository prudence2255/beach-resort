import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {roomsSelector, getFeaturedRooms} from 'store/slices/roomsSlice';
import Room from 'components/Room';
import Loader from 'components/Loader';

/**
 * featured rooms component
 * displays featured rooms
 */
export default function FeaturedRooms() {
    const {featuredRooms} = useSelector(roomsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeaturedRooms());
        return () => { }
    }, [dispatch]);

    const roomList = featuredRooms.map(room => <Room key={room.id} room={room}/>)
    if(featuredRooms.length === 0){
        return <Loader />
    }
    return (
        <>
        <div className="featured-rooms mb-5">
        <div className="col-md-8 text-center mx-auto">
             <h2>
             Featured Rooms
             <div className="divider"></div>
             </h2>   
            </div>
           <div className="row">
                 {roomList}
           </div>
        </div>
        </>
    )
}
