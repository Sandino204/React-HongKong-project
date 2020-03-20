import React, { Component } from "react";
import { Card,  CardText, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom'


    function RenderDish({dish}){
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

    
    function RenderComments({comments}){
        if(comments != null || comments != undefined){
            const comm = comments.map((comment) => {
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
    



    
    
    

    const DishDetail = (props) => {
        

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> 
                            {props.dish.name}  
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}></RenderDish>
                    <div className="col-12 col-md-5">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments}></RenderComments>
                    </div>
                </div>
            </div>
        )
    }



export default DishDetail