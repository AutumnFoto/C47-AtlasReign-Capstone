import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addEat} from "../../../modules/HomeDataManager";
import "./EatForm.css";

export const EatForm = () => {

const currentUser= JSON.parse(sessionStorage.getItem("atlasreign_id"))

const [eat, setEat] = useState({
    food: "",
    drink: "",
    snack: "",
    userId: parseInt(currentUser)
});





}