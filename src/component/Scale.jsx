import React, { Component } from 'react';
import {Button, Card, Dropdown, InputGroup, FormControl, DropdownButton} from 'react-bootstrap';
// import uuid from 'react-uuid';


class Scale extends Component {
    state = { 
        value: "VALUE",
        initialId: 0,
        initialId2: 0,
        initialGrainValue: 0,
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
         grain: [
            {id:1, value: "Select Grain"},
            {id:2, value: "Rice"}, 
            {id:3, value: "Beans"},
            {id:4, value: "Garri"},
            {id:5, value: "Wheat"},
        ]
         
     }

     handleGrainValue=(id)=>{
        this.setState({initialGrainValue: id})
        
     }
     handleTitle=(id)=>{
        this.setState({initialId: id})
        
     }
     
     handleTitle2=(id)=>{
        this.setState({initialId2: id})
     }

    handleValue=(e)=>{
        let valTyped = e.target.value
        let val = this.state.scale[this.state.initialId].measure
        let val2 = this.state.scale[this.state.initialId2].measure
        this.state.initialId === 0 ? this.setState({value: "Value"}) : 
        this.setState({value: valTyped + " " + val + " equals '--' in "+ val2})
    }

    handleValueRes=()=>{
        if(this.state.initialGrainValue!==0&&this.state.initialId!==0&&this.state.initialId2!==0)
        console.log("Value Manager");
        // this.setState({value: valTyped + " " + val + " equals '--' in "+ val2})
    }

    render() { 
        return ( 
            <>
            <Card border="light" style={{ width: '20rem' }} className="mx-auto m-5 shadow-sm">
                <Card.Header className="font-italic font-weight-bold text-success">
                <DropdownButton variant="outline-success" title={this.state.grain[this.state.initialGrainValue].value}>
                    {this.state.grain.map(s  =>  
                    <Dropdown.Item key={s.id} onClick={() => this.handleGrainValue(s.id - 1)}>{s.value}
                    </Dropdown.Item>)}
                </DropdownButton>
                </Card.Header>
                <Card.Body>
                <Card.Title>{this.state.value}</Card.Title>     
                    <InputGroup>
                            <FormControl
                            placeholder="Enter Quantity"
                            aria-label=" "
                            aria-describedby="basic-addon2"
                            onChange={this.handleValue}
                            />
                            <DropdownButton
                            // as={InputGroup.Append}
                            variant="secondary"
                            className="font-italic"
                            title={this.state.scale[this.state.initialId].measure} 
                            // id="input-group-dropdown-2"
                            >{this.state.scale.map(s  =>  <Dropdown.Item key={s.id}
                            onClick={() => this.handleTitle(s.id - 1)}>{s.measure}</Dropdown.Item>)}
                            </DropdownButton>
                        </InputGroup>
                    <p className="font-weight-bold m-3">IN</p>
                <DropdownButton
                    variant="secondary"
                    title={this.state.scale[this.state.initialId2].measure}
                    >{this.state.scale.map(s  =>  <Dropdown.Item key={s.id}
                    onClick={() => this.handleTitle2(s.id - 1)}
                    >{s.measure}</Dropdown.Item>)}
                    </DropdownButton>
                    <br/>
                <Button className="shadow btn" variant="outline-info" href="/"> Reset </Button>
                </Card.Body>
            </Card>
            </>
        );
    }
}
 
export default Scale;