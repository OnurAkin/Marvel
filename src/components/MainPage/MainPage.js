import React from 'react';
import { HeroCards } from './HeroCards/HeroCards';
import { Container, Col, Row } from 'react-bootstrap';
import { heroService } from '../../services/HeroServices';



import { Header } from '../Header/Header';
import style from './MainPage.module.css';



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            isLoading: true
        }
    }

    componentDidMount() {
       
        
        heroService.getCharacters()
            .then(response => this.setState({ heroes: response }))
            .finally(() => this.setState({ isLoading: false }))
    }

    searchHeroes = (text) => {
        heroService.searchCharacters(text)
            .then(response => this.setState({ heroes: response }))
    }



    render() {
        // if (this.state.isLoading) {
        //     return <Loader />
        // }
        return (
            <>
                <Header />
                {this.state.isLoading
                    ?<div>Loading</div>
                    : <Container fluid>
                        <Row>
                            <Col lg={12}>
                               
                                <HeroCards heroes={this.state.heroes} />
                            </Col>
                          
                        </Row>
                    </Container>
                }
            </>
        )
    }
}

export { MainPage }