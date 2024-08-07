import React from 'react';
import { Container, Button, Box } from '@mui/material';

const CornerButtons = () => {
  return (
    <Container sx={{ height: '100vh' }}>
          <Box sx={{display:'flex',position:'fixed',bottom:16,right:16}}>
            <Button variant="contained">Bottom Right</Button>
          </Box>
    </Container>
  );
};

export default CornerButtons;