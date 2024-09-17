import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, person, startDate, endDate }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles['card-title']}>{title}</h2>
            <p className={styles['card-description']}>{description}</p>
            <p className={styles['card-person']}>Asignado a: {person}</p>
            <p className={styles['card-date']}>Fecha de inicio: {startDate}</p>
            <p className={styles['card-date']}>Fecha de fin: {endDate}</p>
        </div>
    );
}

export default Card;