import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,Modal,ModalHeader,ModalBody,Label,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Control,Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({dish}){
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} ></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
    }

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const CommentForm=(props)=>{
    const [isModalOpen,setIsModalOpen]=useState(false);

    const handleSubmit=(values)=>{
        console.log(values)
        props.postComment(props.dishId, values.rating, values.author, values.comment);
    }

    const toggleModal=()=>{
        setIsModalOpen((prevState)=>{
            return !prevState
        })
    }
        return(
            <div>
                <Button outline onClick={toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" sm={12}>Rating</Label>
                                <Col sm={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                        >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" sm={12}>Your Name</Label>
                                <Col sm={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" sm={12}>Comment</Label>
                                <Col sm={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
}

function RenderComments({comments, postComment, dishId}) {
    if(comments!=null){
        return(
            <div className="col-12 col-md-5 m-1" key={comments.id}>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <Stagger in>
                        {comments.map((comment)=>{
                            return(
                                <Fade  in>
                                    <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </Fade>
                            )
                        })}
                    </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const Dishdetail=(props)=>{
    if(props.isLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.isErrMess){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.isErrMess}</h4>
                </div>
            </div>
        )
    }
    else if(props.dish!=null)
    {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id}
                    />
                </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default Dishdetail;