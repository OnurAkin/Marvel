import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import style from './HeroCard.module.css';
import { Link } from 'react-router-dom';

const HeroCard = ({ id, avatar, name }) => {
    
    return (
        <Col lg={3} md={8} sm={12} className={style.crdMargin}>
            <Card className={style.cardAbs}>
                <Card.Img variant="top" src={avatar} />
                <Card.Title className={`text-center ${style.abs}`}>{name}</Card.Title>
                <Card.Body className={style.back}>

                    <Col className="text-center">
                        <Link to={`/infopage/${id}`}><Button variant="danger" className={style.btnMargin}>Info</Button></Link>
                     
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { HeroCard };