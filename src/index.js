import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/core';
import { Box, Divider, Text, Image, Flex } from '@chakra-ui/core';

function Top () {
  return (
    <Box className="Top" mx="20vw" mb="10vh">
      <h1>Nothing Starts Finished</h1>
      <p>This website is dedicated to showing the unfinished beginnings of what
        looks finished today.</p>
      <Text mr="140px">Today's giants of industry, technology, business and... well,
        everything really... started off as yesterday's unpolished hacks and awkward experiments.
        <br /><br />Proof below.
      </Text>
    </Box>
  );
}

function Inter () {
  return (
    <Box mt="5vh" mx="20vw">
    { /* images root index is to 'public' directory, adjacent to index.html */ }
      <img src="/intercom-transparent-logo.svg" alt="Intercom black logo"/>
      <Text mt="5px" mb="35px">Intercom is a suite of tools dedicated to helping companies help their customers. Basically it's as complete a set of marketing, messaging and customer support tools as you'll find. Founded in 2011, Intercom today is worth $1.6 billion and employs over 600 people. In the beginning though, Intercom started as a minor tool to let customers know when a web-app was having issues.
      </Text>
      <Box display='flex' flexDir='column'>
        <Image src="/intercom-product.png"/>
        <Text my="35px">This is what Intercom looks like today, and even that's only a part of the overall platform. <br /><br />The first version of Intercom is shown below, from 2010. See the textbox and star icon in the bottom right? That's it.
        </Text>
        <Image src="/intercom-first-version.png"/>
      </Box>
    </Box>
  );
}

function Website () {
  return (
    <ChakraProvider>
      <div>
        <Top />
        <Divider my="5vh"/>
        <Inter />
      </div>
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
