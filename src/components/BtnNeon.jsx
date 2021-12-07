import React from 'react';

const BtnNeon = (props) => {
    return (
        <>
        <div className='btnNeon btn btn-dark'>
            <span id='span1'></span>
            <span id='span2'></span>
            <span id='span3'></span>
            <span id='span4'></span>
            { props.text }
        </div>
        </>      
    );
};
export default BtnNeon;
