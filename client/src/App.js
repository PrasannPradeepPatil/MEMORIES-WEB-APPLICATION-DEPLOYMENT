
//IMPORT EXTERNAL MODULE
import React, { useState, useEffect } from 'react';                              //sudo npx create-react-app client
import { useDispatch } from 'react-redux';                                       //sudo npm install react-redux
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';   //sudo npm install @material-ui/core

//IMPORT MODULES
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

//CLASS  COMPONENT 
/* #region Main */
//class Counter extends Component { 
    //STATE OBJECT :holds data of component 
    /*
    state = {count:0,ticks:0}                                                            -->create state  
    this.state.count;{this.stats.count}                                                  -->use state  inside class,jsx                   
    this.setState({count:this.state.count+1});{this.setState({count:this.state.count+1}) }-->update state   inside class,jsx
    this.state.count = this.state.count+1 X                                          
    */
                                   

    //STYLES :styles of component
    /*
    const classes = useStyles();                        -->create styles (imported from styles.js as each file has a corresponding styles.js)
    this.classes.styleName ; {this.classes.styleName}   -->use styles in fn,jsx
    */
    
    
    //CONSTRUCTOR:Initialises properties of component
    /*
    constructor(props){       
      super(props)                                      -->INHERIR :Inherit parent constructor compulsarily                                            
      this.state.count =0                                -->INITIALISE STATE : In constructor no need to do this.setState()
      this.state.ticks = this.props.value                -->USE PROPS : Props must be given as an arguement to constructor
      this.arrowfnName = this.arrowfnName.bind(this)     -->BINDING EVENTHANDLER FNS :So that  "this" inside the arrowfnName methods references class object)         
      
    } 
    */                                      
    
    
    //METHOD()
    /*
    async fnName(){}                                                          -->create short fn(For other fns)
    fnNmme = async (params) => {}                                             -->create arrow fn(For evenTHandler fns )
    this.fnName(arg)/this.fnName ; {() =>{this.fnName(arg)}/this.fnName}       -->use arrow fn  inside fn ; jsx                     
    */


    //RENDER METHOD :Converts JSX into REACT ELEMENT(VIRTUAL DOM)
    /*
    render() {               
      return(
          <div>           --><DIV> TAG : React.createElement('elementtype') calls the first element of jsx                                                                    
              HTML CODE                  so if jsx is  <h1></h1> <img></img> it will call 'h1' but if you wrap all code inside div it will call 'div'              
          <div>            -->HTML CODE                         
      );                     DYNAMIC VAR,METHOD,FOR,IF
                              {this.state.count}                                                -->using variable dynamically
                              {this.methodName()}                                               -->using normal method methods dynamically 
                              {this.methodName} OR {()=>{this.methodname(arg)}}                 -->using eventHandler method methods  dynamically
                              <ul>{this.state.names.map(name =><li key=name>{name}</li> )}<ul>  -->using for loop dynamically(JSX is not a template hence we dont have syntax for ror loop)
                                                                                                  <ul>{names}</ul> :<ul></ul> is a jsx exp insode which you use names array dynamically
                                                                                                  <li>{name}</li>  :<li></li> is a jsx exp insode which you use name element of array dynamically
                                                                                                  key =name        :the elements of array taken here must be unique so you must provide unique property to key
                                                                                                                  EG : in our case all the name in names arr are unique hence key=name
                                                                                                                      if names arr was like [{id:1,}{id:2,}] then you would do key=name.id
                              {this.state.name.length === 0 && "This is empty"}               -->using if dynamically(JSX is not a template hence we dont have syntax for if )  
                                                                                                  if condition used as a first operand  if condition op used as a second operand 
                                                                                                  so both must be truthy 

                              CSS,EVENT                                                                    
                              <tagName className="classname">  OR <tagname style = {{"key1":"value1","key2":"value2"}}>   --> classname= instead of class=
                                                                                                                              style={{"key1":"value1","key2":"value2"}} instead of style="key1":"value1";"key2":"value2"
                              <tagname eventName = {this.eventHandlerMethodName}>                                              --> eventHandlerFnName not eventHandlerFnName()

                                              
                                        
     

    }


    render(){}
        return(    
        <Tagname                                                     -->Tagname from materialUI ; Tagname can also be child Component
                attr=value,                                           -->attr   and their values
                style = {{"key1":"val1","key2":"val2"}}                -->styles keys and values                                (style={{"key1":"value1","key2":"value2"}} instead of style="key1":"value1";"key2":"value2")
                className = {this.classes.styleName},                  -->classes are taken from styles.js of each filename.js  (className instead class)
                eventName={this.fnName(arg)}/this.fnName},              -->events  are handled by fns
                propvarname={this.fnName(arg)}/this.fnName/this.varname}-->propvar are given fns or variables of the fn
            </Tagname>                                                     propvar are passed to childComponent and are caught function arguement of child component
                                                                           (NOTE:key="uniqueProperty" is not considered a value and not passed from parent as it is used to uniquely identify values in dynamic for  
                                                                           Eg:<div>{count.map((name)=>{<Component1 key=name.id ,value={this.state.count}})  


        {this.varName/() =>{this.fnName(arg)}/this.fnName}        -->using varname, fnName dynamically in JSX
        <ul>{this.names.map(this.name =><li key=name>{this.name}</li> )}<ul -->using for loop dynamically(JSX is not a template hence we dont have syntax for "for loop" hence we have to use array)
                                                                    <ul>{names}</ul> :<ul></ul> is a jsx exp insode which you use names array dynamically
                                                                    <li>{name}</li>  :<li></li> is a jsx exp insode which you use name element of array dynamically
                                                                    key =name        :the elements of array taken here must be unique so you must provide unique property to key
                                                                                    EG : in our case all the name in names arr are unique hence key=name
                                                                                        if names arr was like [{id:1,}{id:2,}] then you would do key=name.id
        {this.name.length === 0 && "This is empty"}              -->using if dynamically(JSX is not a template hence we dont have syntax for if hence we use && || )  
                                                                    if condition used as a first operand  if condition op used as a second operand 
                                                                    so both must be truthy  

        
      );
    }
    EG:
    <Form currentId={currentId} setCurrentId={setCurrentId} />                               -->Form is child Component ;currentId prop is given currentId state var ; setCurrentId prop is given  setCurrentId function
                                                                                                In components/Form/Form.js const Form = ({ currentId, setCurrentId }) currentId,setCurrentId are collected
    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography> -->Typography is a tag from material UI ; classNmae is given {classes.heading} ;variant align  attributes are given values
    <Button variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button> -->Button is a tag from material UI ;variant color size  attributes are given values; onclick event os given clear function



    */                                       
         
    
    //COMPONENTDIDMOUNT METHOD: Called after mounting component  and  rendering REACT ELEMENT(VIRTUAL DOM) in HTML ELEMENT(ACTUAL DOM)
    //                      
    /*      
    componentDidMount(){      
    }
    */

    //COMPONENTDIDUPDATE METHOD:Called after updating component and rendering REACT ELEMENT(VIRTUAL DOM) in HTML ELEMENT(ACTUAL DOM)
    //                       
    /*
    componentDidUpdate(previousProps,previousState){ 
         previousProps -- holds previous props before updating
         previousState -- holds previous state before updating
    }
    */
    
    
    //COMPONENTDIDMOUNT METHOD:Called before  deleting component  and  rendering REACT ELEMENT(VIRTUAL DOM) in HTML ELEMENT(ACTUAL DOM)
    //                        
    /*
    componentWillUnMount(){   
    }
    */
   



    //}            

/* #endregion */
//FUNCTION COMPONENT
/* #region Main */
//fnName = (props) =>{   
    
   
    
    //USESTATE() :data of component
    /*
    const [count, setCount] = useState(0);        -->create state  where key is count value with defaultvalue 0 and setcount() is a fn to update count (import from 'react')
    count ,{count}                                -->use state  in fn ,jsx                    
    setCount(count+1),{setcount(count+1)}         -->update state in fn ,jsx 
    */

    //USESTYLES():styles of component
    /*
    const classes = useStyles();                -->create styles (import from module 'styles.js' )
    classes.styleName ; {classes.styleName}     -->use styles in fn,jsx
    */
    
 
    //USEDISPATCH() :dispatches action to redux store
    /*
    const dispatch = useDispatch();                  -->create dispatch(import fro module 'react-redux')
    dispatch(getPosts()); {dispatch(getPosts())}     -->use dispatch which dispatches an action to redux store

    */

    //USESELECTOR() :get action from the redux store
    /*
    const post = useSelector((state) => console.log(state.posts)); -->useSelector gets action from redux store
                                                                      state = variable used for combinin reducers in reducers/index.js
                                                                      state.posts = array returned by reducers  in reducers/posts.js
     */



    //USEEFFECT()
    /*  
                                                                   -->create dispatch(import fro module 'react')
    useEffect(() => {code}}, [varName1/fnName1, varName2/fnName2]); -->use useEffect() for performing lifecycle hooks
                                                                     useEffect(fn)                        =fn called on componentDidMount() + componentWillUmmount() 
                                                                     useEffect(fn,[statevar1,statevar2])  =fn called on componentDidMount() + componentWIllUmmount() + componentDidUpdate() for any 1 of the variable in dependency array

                                                                        

     */


    //METHOD()
    /*
    const fnNmme = async (params) => {}            -->create arrow fn
    fnName(arg)/fnName; {fnName(arg)/fnName}       -->use aarrow fn  inside fn , jsx                     
    */


    //RETURN : Converts JSX into REACT ELEMENT(VIRTUAL DOM)
    /*
    return(    
        <Tagname                                        -->Tagname from materialUI ; Tagname can also be child Component
                attr=value,                              -->attr   and their values
                style = {{"key1":"val1","key2":"val2"}}  -->styles keys and values                                (style={{"key1":"value1","key2":"value2"}} instead of style="key1":"value1";"key2":"value2")
                className = {classes.styleName},        -->classes are taken from styles.js of each filename.js  (className instead class)
                eventName={fnName(arg)/fnName},          -->events  are handled by fns
                propvarname={fnName(arg)/fnName/varName} -->propvar are given fns or variables of the fn
         </Tagname>                                         propvar are passed to childComponent and are caught function arguement of child component
                                                           (NOTE:key="uniqueProperty" is not considered a value and not passed from parent as it is used to uniquely identify values in dynamic for  
                                                            Eg:<div>{count.map((name)=>{<Component1 key=name.id ,value={this.state.count}})  


        {varName/fnName(arg)/fnName}                              -->using varname, fnName dynamically in JSX
        <ul>{names.map(name =><li key=name>{name}</li> )}<ul>     -->using for loop dynamically(JSX is not a template hence we dont have syntax for "for loop" hence we have to use array)
                                                                    <ul>{names}</ul> :<ul></ul> is a jsx exp insode which you use names array dynamically
                                                                    <li>{name}</li>  :<li></li> is a jsx exp insode which you use name element of array dynamically
                                                                    key =name        :the elements of array taken here must be unique so you must provide unique property to key
                                                                                    EG : in our case all the name in names arr are unique hence key=name
                                                                                        if names arr was like [{id:1,}{id:2,}] then you would do key=name.id
        {name.length === 0 && "This is empty"}                     -->using if dynamically(JSX is not a template hence we dont have syntax for if hence we use && || )  
                                                                      if condition used as a first operand  if condition op used as a second operand 
                                                                      so both must be truthy  

        
    );
    EG:
    <Form currentId={currentId} setCurrentId={setCurrentId} />                               -->Form is child Component ;currentId prop is given currentId state var ; setCurrentId prop is given  setCurrentId function
                                                                                                In components/Form/Form.js const Form = ({ currentId, setCurrentId }) currentId,setCurrentId are collected
    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography> -->Typography is a tag from material UI ; classNmae is given {classes.heading} ;variant align  attributes are given values
    <Button variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button> -->Button is a tag from material UI ;variant color size  attributes are given values; onclick event os given clear function





                                        


    */




    


//} 
/* #endregion */
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};



//EXPORT  
export default App;