import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Course({ image, title, description }) {
    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt='kurlarim' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' >{title}</Typography>
                <Typography variant='body2' color="text.secondry">{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default Course