//IMPORT EXTERNAL MODULE
import React from 'react';                                       //sudo npx create-react-app client
import { useSelector } from 'react-redux';                      //sudo npm install react-redux
import { Grid, CircularProgress } from '@material-ui/core';    //sudo npm install @material-ui/core
//IMPORT MODULES
import Post from './Post/Post';
import useStyles from './styles';

//FUNCTION COMPONENT
/*
same as app.js
 */
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

//EXPORT
export default Posts;