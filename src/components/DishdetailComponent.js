import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';

function RenderDish({dish}){
        return(
            <Card>
                <CardImg width="100%" top src={dish.image} alt={dish.name} ></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

function RenderComments({comments}){
        if(comments!=null){
            return(
                <div className="col-12 col-md-5 m-1" key={comments.id}>
                    <h4>Comments</h4>
                    {comments.map((comment)=>{
                        return(
                            <ul key={comment.id} className="list-unstyled">
                                <li>{comment.comment}</li>
                                <br/>
                                <li>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            </ul>
                        )
                    })}
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
        if(props.dish!=null)
        {
            return(
                <div className='container'>
                    <div className='row'>
                        <div  className="col-12 col-md-5 m-1">
                            {RenderDish(props)}
                        </div>  
                        {RenderComments(props.dish)} 
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