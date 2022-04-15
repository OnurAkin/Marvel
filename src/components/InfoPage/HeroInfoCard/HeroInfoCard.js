import React from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './HeroInfoCard.module.css';
import { text } from '../../../shared/loremIpsum';

const HeroInfoCard = ({ heroInfo }) => {
    const {  description, image, name } = heroInfo;
    return (
        <Row className={style.border}>
           

            <Col lg={3} className={`${style.center} ${style.image}`}>
                <img src={image} alt="heroImage" />
             
            </Col>
            <Col lg={9} className={style.center} >
                <h2 className={style.paddingTop}>{name}</h2>
                <p>{description
                    ? description
                    : text
                }</p>
            </Col>
        </Row>
    )
}

export { HeroInfoCard };