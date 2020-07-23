import React, { Component } from 'react';
import {Card, Dropdown, InputGroup, FormControl, DropdownButton} from 'react-bootstrap';
// import uuid from 'react-uuid';


class Scale extends Component {
    state = { 
        value: "VALUE",
        initialId: 0,
        initialId2: 0,
        scale: [
        {id:1, measure: "Select Measure"},
        {id:2, measure: "Tomato Cup"}, 
        {id:3, measure: "Milk Cup"},
        {id:4, measure: "Half-Derica Cup"},
        {id:5, measure:"Mudu (Congo)"},
        {id:6, measure: "Derica Cup"},
        {id:7, measure: "Big Derica Cup"},
        {id:8, measure: "Paint Container"},
        {id:9, measure: "Bag"},
        {id:10, measure: "Kilograms"}
         ],

         
     }

     title =()=>{
        return this.state.scale[this.state.initialId].measure
     }

     title2 =()=>{
        return this.state.scale[this.state.initialId2].measure
     }

     handleTitle=(id)=>{
        this.setState({initialId: id})
     }
     
     handleTitle2=(id)=>{
        this.setState({initialId2: id})
     }
    

    render() { 
        return ( 
            <>
            <Card border="light" style={{ width: '20rem' }} className="mx-auto m-5 shadow-sm">
                <Card.Header className="font-italic font-weight-bold text-success">MEASURING CALCULATOR</Card.Header>
                <Card.Body>
                <Card.Title>{this.state.value}</Card.Title>
                            
                    <InputGroup>
                            <FormControl
                            placeholder="Enter Quantity"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <DropdownButton
                            // as={InputGroup.Append}
                            variant="secondary"
                            title={this.title()} 
                            // id="input-group-dropdown-2"
                           
                            >{this.state.scale.map(s  =>  <Dropdown.Item key={s.id}
                            onClick={() => this.handleTitle(s.id - 1)}>{s.measure}</Dropdown.Item>)}
                            </DropdownButton>
                        </InputGroup>
                    <p className="font-weight-bold m-3">IN</p>
                <DropdownButton
                
                    variant="secondary"
                    title={this.title2()}
                    >{this.state.scale.map(s  =>  <Dropdown.Item key={s.id}
                    onClick={() => this.handleTitle2(s.id - 1)}
                    >{s.measure}</Dropdown.Item>)}
                    </DropdownButton>
                </Card.Body>
            </Card>
            </>
        );
    }
}
 
export default Scale;