import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

function Infobox({title,cases,total}) {
  return (
    <Card className='infoBox'>
      <CardContent>
        {/* {Title} */}
        <Typography   className='infoBox_title' color="textSecondary"> {title}</Typography>
        {/* {no. of cases} */}
        <h2 className="infoBox_cases">{cases}</h2>
        {/* {Cases} */}
        <Typography className='infoBox_total' color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
    )
}

export default Infobox;
