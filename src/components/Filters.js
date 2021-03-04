import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {roomsSelector, getRooms,  setFilters} from 'store/slices/roomsSlice';
import {RangeInput, SelectBox, CheckBox, NumberInput} from 'components/FormFields';


export default function Filters() {

    const {
        rooms, 
        type,
        pets,
        breakfast,
        capacity,
        minSize,
        maxSize,
        minPrice,
        maxPrice,
        price,
    } = useSelector(roomsSelector);

    const dispatch = useDispatch();
   
   

    let types = new Set(rooms.map(room => room.type));

    types = ["all", ...types];

    let guests = new Set(rooms.map(room => room.capacity));

        guests = [...guests];

    const handleChange = async(e) => {
         dispatch(setFilters(e.target));
        }  

    useEffect(() => {
        dispatch(getRooms());
        return () => {  }
    }, [dispatch])

    
    return (
       <>
         <div className="filters my-5">
         <div className="row">
            <div className="col-md-8 text-center mx-auto">
                <h2>
                Search Rooms
                <div className="divider"></div>
                </h2>
                
            </div>
            </div>
            <div className="row px-2">
                <div className="col-sm-2">
                    <SelectBox title="Room Type" options={types}
                        name="type" onChange={handleChange} value={type}
                    />
                </div>
                <div className="col-sm-2">
                <SelectBox title="Guests" options={guests}
                        name="capacity" onChange={handleChange} value={capacity}
                    />
                </div>
                <div className="col-sm-2">
                <RangeInput type="range" title={`Room Price $${price}`}
                    value={price} onChange={handleChange} name="price"
                    min={minPrice} max={maxPrice}
                />
                </div>
               <div className="col-sm-2">
                <NumberInput type="number" value={minSize} onChange={handleChange}
                    name="minSize" title="Min Room Size"
                />
                </div>
                <div className="col-sm-2" >
                <NumberInput type="number" value={maxSize} onChange={handleChange}
                    name="maxSize" title="Max Room Size"
                />
                </div>
                <div className="col-sm-2">
                <CheckBox title="Breakfast" 
                        name="breakfast" onChange={handleChange} checked={breakfast}
                    />
                  <CheckBox title="Pets" 
                        name="pets" onChange={handleChange} checked={pets}
                    />  
                </div>
            </div>
         </div>
       </>
    )
}