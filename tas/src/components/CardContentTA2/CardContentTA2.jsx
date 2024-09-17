import React from "react";
import classes from "./index.module.css";

const CardContent = ({ title, description, assignedTo, startDate, dueDate }) => {
    return (
        <div className={classes.data}>
            <h2 className={classes["card-content-title"]}>{title}</h2>
            <p>{description}</p>
            <p>Asignado a: {assignedTo}</p>
            <p>Fecha de inicio: {startDate}</p>
            <p>Fecha de entrega: {dueDate}</p>
        </div>
    );
};

export default CardContent;
