import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia' ;

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      backgroundColor : 'whitesmoke',
      justifyContent :'center'
    },

    title: {
      fontSize: 14
    },
   
    pos: {
      marginBottom: 12
    },
    gridContainer: {
          paddingLeft: "40px",
          paddingRight: "40px"
        }
     
  });
  

//for displaying the list of courses passed down by the course page component - markup

function CourseList(props){

    const classes = useStyles();
    return (
        <>
         <Grid
                container
                spacing={4}
                className={classes.gridContainer}
                justify="center"
              >
         
    {props.courses.map(course => {
     return (
        <Grid item xs={12} sm={6} md={4} key={course.id}  >        
        <Card className={classes.root} variant="outlined">
          <CardMedia 
          component ="img"
          image = "https://www.geteducated.com/wp-content/uploads/2019/11/online-tutoring-concept-ebooks-internet-courses-process-vector-staff-vector-id1053519062.jpg"
          />
         <CardContent  className={classes.content}>

            <Typography variant="h5" component="h2" align="center">
            <Link to={'/course/'+ course.slug}>{course.title}</Link>
            </Typography>

            <Typography className={classes.pos} color="textSecondary" align="center">
              By AuthorId : {course.authorId}
            </Typography>

            <Typography variant="body2" component="p" align="center">
              Course description goes here...
            </Typography>

          </CardContent>

          <CardActions className={classes.root} >
            <Button size="small" color="primary" variant="contained" component="span">More Details</Button>
          </CardActions>

        </Card>
        </Grid> 
        )
    })}
     
 </Grid>
</>
 );
  
 /*   return(
        <>
             <table className="table" style={{color:'white'}}>
                    <thead>
                        <tr align="center">
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>Category</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.courses.map(course => {
                            return (
                                <tr key={course.id} align="center"> 
                                    <td><Link to={'/course/'+ course.slug}>{course.title}</Link></td>
                                    <td>{course.authorId}</td>
                                    <td>{course.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
*/
}




export default CourseList