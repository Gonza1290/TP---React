import Card from 'react-bootstrap/Card';

export default function AboutUs() {
    return (
        <div className="container pt-4 pb-5">
            <div className='row'>
                <div className='col-12'>
                    <h2>About Us</h2>
                    <p>We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
                </div>
                <div className='col-xl-4'>
                    <Card style={{width: "25rem"}}>
                        <Card.Img variant="top" src="src/assets/images/450_1000.jpg" style={{ width: "100%", height:"20rem"}}/>
                        <Card.Body>
                            <Card.Title>Feature 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-xl-4'>
                    <Card style={{width: "25rem"}}>
                        <Card.Img variant="top" src="src/assets/images/gettyimages-1422023439-64f1eaf518ace.jpg" style={{ width: "100%", height:"20rem"}}/>
                        <Card.Body>
                            <Card.Title>Feature 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-xl-4'>
                    <Card style={{width: "25rem"}}>
                        <Card.Img variant="top" src="src/assets/images/images.jpeg" style={{ width: "100%", height:"20rem"}}/>
                        <Card.Body>
                            <Card.Title>Feature 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
