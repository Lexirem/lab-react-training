import React from 'react';


const IdCard = (props) => {
    props.lastName = String;
    props.firstName = String;
    props.gender =  String ('male', 'female');
    props.height = Number;
    props.birth = Date;
    props.picture = String;
}

export default IdCard;