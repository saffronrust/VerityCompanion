'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@mui/material/Card';

import Circle from '@/images/circle.png';
import Square from '@/images/square.png';
import Triangle from '@/images/triangle.png';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Inside() {
    const [yourShape, setYourShape] = useState('Circle');

    const shapeArray = ['Circle', 'Square', 'Triangle'];

    const [remainingShapes, setRemainingShapes] = useState(['Square', 'Triangle']);

    useEffect(() => {
        setRemainingShapes(shapeArray.filter(shape => shape !== yourShape));
    }, [yourShape]);

  return (
    <Container maxWidth="xl">
        <Header />
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <Typography 
            variant="h3" 
            component="h1" 
            sx={
                { 
                mt: 5, 
                mb: 1 
                }
            }
            >
            Inside Guide
            </Typography>
            <Card 
                sx={
                    { 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.1rem', 
                    alignItems: 'center', 
                    minWidth: '350px' 
                    }
                }
            >
                <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    Input Your Shape
                </Typography>
                <Box 
                    sx={
                        { 
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '0.5rem' 
                        }
                    }
                >
                    <Button 
                        onClick={() => setYourShape('Circle')}
                        variant= {yourShape === 'Circle' ? 'contained' : 'outlined'}
                    >
                        <Box
                            display="flex"
                            gap="0.25rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image
                                src={Circle}
                                alt="Circle"
                                width={20} 
                                height={20} 
                                style={
                                {
                                    filter: yourShape === 'Circle' ? 'invert(0)' : 'invert(0.3)'
                                }
                                } 
                            />
                            Circle
                        </Box>
                    </Button>
                    <Button 
                        onClick={() => setYourShape('Square')}
                        variant= {yourShape === 'Square' ? 'contained' : 'outlined'}
                    >
                        <Box
                            display="flex"
                            gap="0.25rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image
                                src={Square}
                                alt="Square"
                                width={20} 
                                height={20} 
                                style={
                                {
                                    filter: yourShape === 'Square' ? 'invert(0)' : 'invert(0.3)'
                                }
                                } 
                            />
                            Square
                        </Box>
                    </Button>
                    <Button 
                        onClick={() => setYourShape('Triangle')}
                        variant= {yourShape === 'Triangle' ? 'contained' : 'outlined'}
                    >
                        <Box
                            display="flex"
                            gap="0.25rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image
                                src={Triangle}
                                alt="Triangle"
                                width={20} 
                                height={20} 
                                style={
                                {
                                    filter: yourShape === 'Triangle' ? 'invert(0)' : 'invert(0.3)'
                                }
                                } 
                            />
                            Triangle
                        </Box>
                    </Button>
                </Box>
                <Typography
                    variant="h4" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    Instructions
                </Typography>
                <Typography
                    variant="h5" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    Phase 1
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    1. Kill a knight. If it drops {yourShape}, DO NOT PICK IT UP. Leave it on the ground.
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    2. If it drops any other shape, pick it up and deposit it into the corresponding statue.
                </Typography>
                <Typography
                    variant="body1" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    For example, if it drops {remainingShapes[0]}, deposit it into the {remainingShapes[0]} statue.
                </Typography>
                <Typography
                    variant="body1" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    If it drops {remainingShapes[1]}, deposit it into the {remainingShapes[1]} statue.
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    3. Type "R" into the chat once you're done.
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    4. Once you see three "R"s in the chat, and you see the shadows in the wall morph {yourShape} twice, that signifies the end of Phase 1.
                </Typography>
                <Typography
                    variant="h5" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    Phase 2
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    1. Give your {yourShape} buff to the {remainingShapes[0]} statue and {remainingShapes[1]} statue.
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    2. When you see the shadows in the wall morph into {remainingShapes[0]} and {remainingShapes[1]}, that signifies the end of Phase 2.
                </Typography>
                <Typography
                    variant="h5" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    Phase 3
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    1. Kill both knights, and pick up both buffs.
                </Typography>
                <Typography
                    variant="h6" 
                    component="h1" 
                    sx={{ my: 1 }}
                >
                    2. If the Outside room people did their job, you can escape!
                </Typography>
            </Card>
        </Box>
        <Footer />
    </Container>
  );
}