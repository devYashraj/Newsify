import React from 'react';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '60vh', 
}));

const Content = styled('main')(({ theme }) => ({
  flex: 1,
}));

const Footer = styled('footer')(({ theme }) => ({
  textAlign: 'center',
  fontFamily: 'sans-serif',
  padding: '20px',
  margin: '20px',
  backgroundColor: theme.palette.background.paper,
}));

export default function Layout({ children }) {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      <Footer>
        <Typography>
          {"© " + new Date().getFullYear() + ", Aconews"}
        </Typography>
      </Footer>
    </Container>
  );
}
