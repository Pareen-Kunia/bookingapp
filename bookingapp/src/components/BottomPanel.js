import React from 'react'
import './style.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BottomPanel = () => {
     return (


          <div id="btm">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00cba9" fill-opacity="1" d="M0,288L1440,0L1440,0L0,0Z"></path>
</svg>
<h1 id="text"> OPERATIONS</h1>
<div className="cardboxx"> 
<Card className="card-back" sx={{ maxWidth: 345 }}>
      
      <CardContent className="cardb" >
        <Typography gutterBottom variant="h4" color="white" component="div">
         <AddTwoToneIcon fontSize='large'  className="icon"/> Manage Roles
        </Typography>
        <Button className="btn-b" variant="contained" size='small' style={{borderRadius:"10rem"}}> < ArrowForwardIcon  color="white"fontSize="medium"/></Button>
        
      </CardContent>
     
    </Card>

    <Card  className="card-back" sx={{ maxWidth: 345 }}>
      
      <CardContent className="cardb">
        <Typography gutterBottom variant="h4" color="white" component="div">
         <PersonIcon fontSize='large'  className="icon"/> Employee Details
        </Typography>
        <Button className="btn-b" variant="contained" size='small' style={{borderRadius:"10rem"}}> < ArrowForwardIcon  color="white"fontSize="medium"/></Button>
              
      </CardContent>
     
    </Card>

    <Card  className="card-back" sx={{ maxWidth: 345 }}>
      
      <CardContent className="cardb">
        <Typography gutterBottom variant="h4" color="white" component="div">
         <ShoppingBagIcon fontSize='large'  className="icon"/> Assign Roles
        </Typography> 
        <Button className="btn-b" variant="contained" size='small' style={{borderRadius:"10rem"}}> < ArrowForwardIcon  color="white"fontSize="medium"/></Button>
               

      </CardContent>
     
    </Card>
</div>

<div id="bg-foot"> 
  <h3 id="text-foot"> Developed by Kusol Labs Inc.</h3>
</div>

               
          </div>
     )
}

export default BottomPanel
