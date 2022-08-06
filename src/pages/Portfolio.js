import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import '../Portfolio.css';

// Import all images
import Portfolio1 from '../assets/portfolio-1.jpg';
import Portfolio2 from '../assets/portfolio-2.jpg';
import Portfolio3 from '../assets/portfolio-3.jpg';
import Portfolio4 from '../assets/portfolio-4.jpg';
import Portfolio5 from '../assets/portfolio-5.jpg';
import Portfolio6 from '../assets/portfolio-6.jpg';


function Portfolio() {
    const cardInfo = [
        { image: Portfolio1, title: "NurseExpress", button: "Live Demo" },
        { image: Portfolio2, title: "Nifty", button: "Live Demo" },
        { image: Portfolio3, title: "Weather Dashboard", button: "Live Demo" },
        { image: Portfolio4, title: "Work Day Scheduler", button: "Live Demo" },
        { image: Portfolio5, title: "Coding Quiz", button: "Live Demo" },
        { image: Portfolio6, title: "E-commerce", button: "Live Demo" }
    ]

    const renderCard = (card, index) => {
        
         return (
            <Container className='col-auto one-card'>
                <Card style={{ width: '18rem' }} key={index} className="shadow-lg m-2 text-center">
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                         <Button variant="primary">{card.button}</Button>
                    </Card.Body>
                </Card>
            
             </Container>
         )
    };

    return (
       <div>
        <div className='text-center'>
            <h1 className='portfolio-title'>Portfolio</h1>
        </div>
        <div className=' container d-flex flex-wrap card-container'>
            {cardInfo.map(renderCard)}
        </div>
        </div>

    );

}

export default Portfolio;