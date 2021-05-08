import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';

class DishdetailComponent extends Component{

    renderDish(dish){
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

    renderComments(comments){
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

    render(props){
        if(this.props.dish!=null)
        {
            return(
                <div className='container'>
                    <div className='row'>
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                    </div>  
                    {this.renderComments(this.props.dish.comments)} 
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
}

export default DishdetailComponent;