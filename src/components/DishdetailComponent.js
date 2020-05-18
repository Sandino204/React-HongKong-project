import React, { Component } from "react";
import { Card,  CardText, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader, Button, Label
    , Row, Col} from "reactstrap";
import { Link } from 'react-router-dom'
import {Control, LocalForm, Errors} from 'react-redux-form'
import {Loading } from './LoadingComponent'
import {baseUrl} from '../shared/baseURL'


    function RenderDish({dish}){
        if(dish != null || dish != undefined){
            return(
                <Card className="col-12 col-md-5 m-1">
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
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
    

    const maxLength = (len) => (val) => !(val) || (val.length <= len)
    const minLenght = (len) => (val) => (val) && (val.length >= len)

    class DishDetail extends Component{
        
    
        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
                
            };
            this.toggleOpen = this.toggleOpen.bind(this)
            this.handleSubmitComments = this.handleSubmitComments.bind(this)
          }
        
        toggleOpen(){
            this.setState({
                isOpen : !this.state.isOpen
            })
        }


        handleSubmitComments(values, addComment, dishId){
            addComment(dishId, values.rating, values.author, values.comment);
        }



        render(){

            if(this.props.isLoading){
                return(
                    <div className="container">
                        <div className="row">
                            <Loading></Loading>
                        </div>
                    </div>
                )
            }else if(this.props.errMess){
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{this.props.errMess}</h4>   
                        </div>
                    </div>
                )
            }else if(this.props.dish != null){
                return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to='/menu'>Menu
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active> 
                                    {this.props.dish.name}  
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <RenderDish dish={this.props.dish}></RenderDish>
                            <div className="col-12 col-md-5">
                                <h4>Comments</h4>
                                <RenderComments comments={this.props.comments}
                                    ></RenderComments>
                                <Button color="white" onClick={this.toggleOpen}><i className="fa fa-pencil"></i> Submit Comment</Button>
                            </div>
                        </div>
                        <Modal isOpen={this.state.isOpen} toggle={this.toggleOpen}>
                            <ModalHeader><h4>Submit Comment</h4></ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleSubmitComments(values, this.props.addComment, this.props.dishId)}>
                                    <Row className="form-group" >
                                        <Label md={2} htmlFor="Rating">Rating</Label>
                                        <Col md={12}>
                                            <Control.select model=".rating" name="rating" className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label md={4} htmlFor="name">Your Name</Label>
                                        <Col md={12}>
                                            <Control.text model=".name" name="name" className="form-control" placeholder="Your Name" 
                                            validators={{ minLenght: minLenght(3), maxLength: maxLength(15)}}></Control.text>
                                            <Errors className="text-danger" model=".name" show="touched"
                                            messages={{ 
                                                minLenght: 'Must be grater than 2 characters ',
                                                maxLength:'Must be 15 characters or less ' 
                                            }}></Errors>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label md={2} htmlFor="Comment">
                                            Comment
                                        </Label>
                                        <Col md={12}>
                                            <Control.textarea model=".comment" name="comment" className="form-control" rows="6"></Control.textarea>
                                        </Col>
                                    </Row>
                                    <Button color="primary" className="mt-2 col-2" type="submit" >Submit</Button>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                )
            }
               
        }
    }



export default DishDetail