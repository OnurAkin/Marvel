import React from 'react';
import { heroService } from '../../services/HeroServices';
import { HeroInfoCard } from './HeroInfoCard/HeroInfoCard';
import { Container } from 'react-bootstrap';


import { Header } from '../Header/Header';


class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroInfo: [],
            comics: [],
            showComics: false,
            modalIsOpen: false,
            comicDetails: {},
            isFullImage: false,
            isLoading: true
        }
    }

    componentDidMount() {
        heroService.getSingleCharacter(this.props.match.params.id)
            .then(heroInfo => this.setState({ heroInfo }))
       
            .finally(() => this.setState({ isLoading: false }))
    }

    openModal = (comicDetails = {}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, comicDetails }))
    }

    showOrHideComics = () => {
        this.setState(prevState => ({ showComics: !prevState.showComics }))
    }

    showFullImage = () => {
        this.setState(prevState => ({ isFullImage: !prevState.isFullImage }))
    }

    render() {
        return (
            <>
                <Header />
                {this.state.isLoading
                    ? <div>Loading</div>
                    : <Container fluid>
                        <Container>
                            <HeroInfoCard heroInfo={this.state.heroInfo}
                                showFullImage={this.showFullImage}
                                isFullImage={this.state.isFullImage} />
                           
                        </Container>
                    </Container>
                }
            </>
        )
    }
}

export { InfoPage };