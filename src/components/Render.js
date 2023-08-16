import React from 'react';
import Paper from '@mui/material/Paper';
import {} from '@mui/material';

const HtmlPaper = ({ htmlContent }) => {
  return (
    <Paper elevation={3} style={{ margin: '1rem', padding: '1rem', maxHeight: '70vh' }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Paper>
  );
};

export default HtmlPaper;
