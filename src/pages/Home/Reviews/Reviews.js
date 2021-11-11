import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <Container sx={{mb: 10}}>
            <Typography sx={{fontWeight: 600, color: '#D10750'}} variant="h6">
                Reviews
            </Typography>
            <Typography sx={{fontWeight: 600, mb: 5}} variant="h4">
                What's Our Client Say
            </Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Grid item xs={12} sm={6} md={4}
                        key={review._id}
                    >
                    <Paper sx={{p: 3, textAlign: 'left', backgroundColor: 'lightGray'}}>
                        <Typography variant="h5" sx={{fontWeight: 600, textAlign: 'center', color: '#D10750'}}>
                            {review.name}
                        </Typography>
                        <Typography variant="h6" sx={{fontSize: 14, my: 2, color: 'text.disabled'}}>
                            {review.review}
                        </Typography>
                        <Typography variant="h6">
                            Ratings: {review.rating}
                        </Typography>
                    </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;