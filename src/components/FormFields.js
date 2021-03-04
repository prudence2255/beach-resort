
const TextInput = (
    {title, name, type, placeholder, extClass, 
    value, onChange}
) => {
    return (
        <>
<div className="input-group">
        <label htmlFor={name}>{title}</label>
        <input type={type} 
        className={`w3-input w3-border w3-round-large ${extClass}`} 
        placeholder={placeholder} 
        aria-label={title} 
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        /> 
        </div>
        </>
    );
  }

 const RangeInput = (
    {title, name, type, placeholder, extClass, 
    min, max, value, onChange}
) => {
    return (
        <>
<div className="input-group">
        <label htmlFor={name}>{title}</label>
        <input type={type} 
        className={`w3-input w3-border w3-round-large ${extClass}`} 
        placeholder={placeholder} 
        aria-label={title} 
        name={name}
        id={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        /> <br />
        </div>
        </>
    );
  }


  const NumberInput = (
    {title, name , step, type, placeholder, extClass, 
 value, onChange}
) => {
    return (
        <>
    <div className="input-group">
        <label htmlFor={name}>{title}</label>
        <input type={type} 
        className={`w3-input w3-border w3-round-large ${extClass}`} 
        placeholder={placeholder} 
        aria-label={title} 
        name={name}
        id={name}
        step={step}
        value={value}
        onChange={onChange}
        /> <br />
        </div>
        </>
    );
  }


const SelectBox = ({name, title, options, value, onChange}) => {
    return(
        <>
    <div className="form-group">
    <label htmlFor={name}>{title}</label>
    <select className="form-control" id={name} value={value}
    onChange={onChange} name={name}
    >
    {options.map((option, i ) => (
        <option value={option} key={i}>{option}</option>
    ))}
    </select>
    </div>
    </>
    )
}


const CheckBox = ({name, title,  checked, onChange}) => {
    return(
        <>
         <div>
            <div className="form-check form-check-inline ml-2" >
             <label className="form-check-label">
            <input type="checkbox" 
            className="form-check-input" 
            name={name}
            id={name}
            checked={checked}
            onChange={onChange}
        />
        {title}   
        </label>
    </div>
   
 </div>
        </>
    )
}

export {
    TextInput,
    RangeInput,
    NumberInput,
    CheckBox,
    SelectBox,
}