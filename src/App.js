import React,{useState,useEffect} from "react";

import { AppBar, Paper, TablePagination, TableRow, Typography, Container} from '@material-ui/core/'

import Cards from './Component/card';
import { makeStyles } from '@material-ui/core/styles';

import "./App.css";
import axios from 'axios';




const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 640
  },
  media: {
    height: 140,
  },
});


const App =()=> {
   let classes = useStyles();
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(6);
   
    const [userlist,setUserlist]=useState([])
  
  useEffect(() => {
         
    axios.get(`https://reqres.in/api/users?page=${page+1}`)
      .then(response => {
        const {data:{data} } = response;
        
        setUserlist(data);
         
      }).catch(err => {
        console.log(err);
      });
    }, [userlist]);
         
  
  const handleChangePage = (event, newPage) => {
   
    setPage(newPage);
  };
   
   const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };  
    
  // const SerachBySymbol = (e) => {
  //   let search = e.target.value;
  //   let newnse = nselist.filter(nse => {
  //       return  nse.SYMBOL.includes(search.trim().toUpperCase())
  //     })  
             
  //   Setsearchlist(newnse);
      
  // }  


  return (
    <div  className='main-container'>
      <Container maxWidth='xl' >
         <AppBar position='fixed' >
           
          <Typography variant="h5" gutterBottom >
             USER LIST
           </Typography>      
          
        </AppBar>
    <Paper className={classes.root}>
       <div className='project-main' >
        {
         userlist ? userlist.map(({id,avatar,first_name,last_name,email}) =>
           <Cards
             key={id}
             first={ first_name }
             last={ last_name }
             email={ email }
             image={avatar}
           />
                
        ) : null 
       }
        
      </div> 
     
      
          
    </Paper> 
        <TablePagination
        rowsPerPageOptions={[6,12]}
        component="div"
        count={12}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> 
      </Container>
    </div>
    );
  
}

export default App;
