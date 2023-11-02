import { Button, Card, Chip, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { RemoveCircle, AddCircle, RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';

function ListCard({ name, price, totalPrice, setTotalPrice, totalItems, setTotalItems }) {

    const [count, setCount] = useState(0)

    return (
        <Card variant='outlined' sx={{ padding: 1, marginLeft: 2, marginRight: 2, marginBottom: 2, marginTop: 1, borderColor: "green" }}>
            <Grid container justifyContent={"center"} alignItems={"center"} >

                <Grid item xs={7} sx={{ padding: 2 }} justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
                    <div >
                        <strong>{name}</strong> - <Chip color='success' label={`$ ${price}`} />
                    </div>
                </Grid>

            </Grid>
        </Card>
    )
}

export default ListCard