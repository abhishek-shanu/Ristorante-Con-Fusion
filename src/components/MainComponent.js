import React,{Component, useEffect} from 'react';
import Menu from './MenuComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { postComment, fetchDishes, fetchComments,fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback:(Feedback)=>dispatch(postFeedback(Feedback)),
    fetchDishes:()=>{dispatch(fetchDishes())},
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
    fetchPromos:()=>{dispatch(fetchPromos())},
    fetchComments:()=>{dispatch(fetchComments())},
    fetchLeaders:()=>{dispatch(fetchLeaders())}
  });

const mapStateToProps= state =>{
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const Main=(props)=>{
    useEffect(()=>{
        props.fetchDishes();
        props.fetchComments();
        props.fetchPromos();
        props.fetchLeaders();
    },[])
    // componentDidMount(){
    //     this.props.fetchDishes();
    //     this.props.fetchComments();
    //     this.props.fetchPromos();
    //     this.props.fetchLeaders();
    // }

    const HomePage=()=>{
        return(
            <Home
            dish={props.dishes.dishes.filter((dish)=>dish.featured)[0]}
            dishesLoading={props.dishes.isLoading}
            dishesErrMess={props.dishes.errMess}
            promotion={props.promotions.promotions.filter((promo)=>promo.featured)[0]}
            promosLoading={props.promotions.isLoading}
            promosErrMess={props.promotions.errMess}
            leader={props.leaders.leaders.filter((leader)=>leader.featured)[0]}
            leadersLoading={props.leaders.isLoading}
            leadersErrMess={props.leaders.errMess}
            />
        );
    }

    const DishWithId=({match})=>{
        return(
            <DishDetail dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={props.dishes.isLoading}
            errMess={props.dishes.errMess}
            comments={props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={props.comments.errMess}
            postComment={props.postComment}
            />
        )
    }

    return(
        <div>
            <Header/>
                <div>
                <TransitionGroup>
                    <CSSTransition key={props.location.key} classNames="page" timeout={300}>
                        <Switch location={props.location}>
                            <Route path='/home' component={HomePage}/>
                            <Route exact path='/menu' component={()=><Menu dishes={props.dishes} />} />
                            <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={props.resetFeedbackForm} postFeedback={props.postFeedback}/>} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route path='/aboutus' component={()=><About leaders={props.leaders} />} />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                </div>
            <Footer/>
        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));