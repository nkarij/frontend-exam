import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignOutAction } from '../../../store/auth/SignOutAction';
import { createStore } from 'redux'
import  AuthReducer from '../../../store/auth/AuthReducer'
// styling:
import styled from 'styled-components';
import { Colors } from '../../../Constants/Theme';


const store = createStore(AuthReducer)



export class LogOutButton extends Component {

    constructor(props) {
        super(props)
    
    }


    componentDidMount() {
        store.dispatch(SignOutAction(null))
    }

    render() {
        const { href, title } = this.props;
            return(
                <ButtonContainer  >
                    <ButtonText>{title}</ButtonText>
                </ButtonContainer>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }

// const mapDispatchToProps = {
//     SignOutAction
// }

export default connect(mapStateToProps , null)(LogOutButton);


// NB IMPORTANT TO PASS THE BUTTON/CUSTOM COMPONENT. 
const ButtonContainer = styled.button`
    display: block;
    height: 50px;
    width: 150px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
    /* background-color: ${props => props.background ? props.background : 'white'}; */
    /* background-color: ${props => props.primary ? '#fff' : 'white'}; */
    background-color: ${props => props.active ? 'green' : 'white'};
`

const ButtonText = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
    margin: auto;
`
