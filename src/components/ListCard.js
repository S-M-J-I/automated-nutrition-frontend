import { Button, Card, Chip, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { RemoveCircle, AddCircle, RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';

function ListCard({ name, price, totalPrice, setTotalPrice, totalItems, setTotalItems }) {

    const [count, setCount] = useState(0)

    return (
        <Card variant='outlined' sx={{ padding: 1, marginLeft: 2, marginRight: 2, marginBottom: 2, marginTop: 1, borderColor: "green" }}>
            <Grid container justifyContent={"center"} alignItems={"center"} >
                <Grid item xs={2} justifyContent={"center"} alignItems={"center"} >
                    <IconButton aria-label='Add Food Item' color='success' onClick={() => {
                        if (totalItems > 0 && count > 0) {
                            if (totalPrice - price < 0) {
                                setTotalPrice(0)
                            } else {
                                setTotalPrice(totalPrice - price);
                                if (totalPrice < 0) {
                                    setTotalPrice(0)
                                }
                            }
                            if (count > 0) {
                                setCount(count - 1);
                                setTotalItems(totalItems - 1);
                            }
                        }

                        if (totalPrice < 0) {
                            setTotalPrice(0)
                        }

                    }}>
                        <RemoveCircleOutline fontSize='medium' />
                    </IconButton>
                </Grid>
                <Grid item xs={7} justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
                    <div >
                        <strong>{name}</strong> - <Chip color='success' label={`$ ${price}`} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <strong>Items taken:</strong> <Chip label={`${count}`} />
                    </div>
                </Grid>
                <Grid item xs={2} justifyContent={"center"} alignItems={"center"} >
                    <IconButton aria-label='Add Food Item' color='success' onClick={() => {
                        setTotalPrice(totalPrice + price);
                        setCount(count + 1)
                        setTotalItems(totalItems + 1)
                    }}>
                        <AddCircle fontSize='medium' />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ListCard