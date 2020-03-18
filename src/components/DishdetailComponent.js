import React, { Component } from "react";
import { Card,  CardText, CardBody, CardTitle, CardImg} from "reactstrap";

class Dishdetail extends Component {

    
    
    

    render(){
        
        // const renderComments = this.dish.comments.map((comment) => {
        //     return (
        //         <div>
        //             <ul className ="list-unstyled" key={comment.id}>
        //             <li>{comment.comment}</li>
        //             <li>{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
        //             </ul>
        //         </div>
        //     )
        // }) 
        

        function renderComments(dish){
            if(dish != null || dish != undefined){
                const comm = dish.comments.map((comment) => {
                    return(
                        <div>
                            <ul className ="list-unstyled" key={comment.id}>
                                <li>{comment.comment}</li>
                                <li>{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            </ul>
                        </div>
                    )
                }) 
                return comm
            }else{
                return(
                    <div>
    
                    </div>
                )
            }
        }
        
        function renderDish(dish){
            if(dish != null || dish != undefined){
                return(
                    <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText >{dish.description}</CardText>
                    </CardBody>
                    </Card>
                )
            }else{
                return(
                    <div>

                    </div>   
                )
            }
        }


        return(
            <div className="container">
                <div className="row">
                    {renderDish(this.props.dish)}
                    <div className="col-12 col-md-5">
                        <h4>Comments</h4>
                        {renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        )
    }

}

export default Dishdetail