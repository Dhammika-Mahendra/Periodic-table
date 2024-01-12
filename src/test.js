import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';

const CustomCard = styled(Card)(({ theme, data }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: data.key === 'key1' ? 'lightblue' : data.key === 'key2' ? 'lightgreen' : 'white',
}));

const App = () => {
  const cardData = [
    { key: 'key1', content: 'Card 1' },
    { key: 'key2', content: 'Card 2' },
    // Add more data as needed
  ];

  return (
    <div>
      {cardData.map((data, index) => (
        <CustomCard key={index} data={data} theme={{}}>
          {/* Your card content goes here */}
          <p>{data.content}</p>
        </CustomCard>
      ))}
    </div>
  );
};

export default App;
