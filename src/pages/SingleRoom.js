import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {roomsSelector, getRoom} from 'store/slices/roomsSlice';
import {useParams} from 'react-router-dom';
import Banner from 'components/Banner';
import Header from 'components/Header';


export default function SingleRoom() {

    const {room} = useSelector(roomsSelector);
    const {slug} = useParams();
    const dispatch = useDispatch();
    const [img1, ...rest] = room?.images || [];

    useEffect(() => {
        dispatch(getRoom(slug));
        return () => {  }
    }, [dispatch, slug]);

    if(!room){
        return(
        <div className="not-found">
         <Header img="./assets/defaultImg.jpeg">
        <Banner title="404" subtitle="page not found"
        link="/" linkText="return home"
        >
        </Banner> 
        </Header> 
        </div>
        )
    }

    if(room && Object.keys(room).length === 0){
        return <div className="col-md-6 mx-auto text-center">Loading...</div>
    }

    return (
        <>
        <div className="single-room page">
        <Header img={img1}>
        <Banner title={room.name} 
        link="/rooms" linkText="Back To Rooms"
        >
        </Banner> 
        </Header>
        <div className="container bg-white p-3 ">
        <div className="row img-container">
            {rest.map((img, i) => (
         <div className="col-md-4" key={i}>
        <div className="w3-card-4 mt-3">
        <img src={img} alt={room.name} className="img-fluid img"/>
        </div>
        </div>
            ))}
        </div>
        <div className="row details">
            <div className="col-md-6">
                <h3>Details</h3>
                <p>
                    {room.description}
                </p>
            </div>
            <div className="col-md-4 ml-lg-5">
            <h3>Info</h3>
            <p>
                <span>Price :</span> <span>${room.price}</span>
            </p>
            <p>
                <span>Size :</span> <span>{room.size } SQFT</span>
            </p>
            <p>
                <span>Max Capacity : </span> <span>{room.capacity > 1 ? '1 Person' : `${room.capacity} People`}</span>
            </p>
            {room.pets && <p>Pets Allowed</p>}
             {room.breakfast && <p>Breakfast Included</p>}   
            </div>
        </div>
        <h4>Extras</h4>
        <div className="row">
           {room?.extras?.map((extra, i) => <div className="col-md-4" key={i}><p >-{extra}</p></div>)}
        </div>
        </div>
        </div>

        </>
    )
}
