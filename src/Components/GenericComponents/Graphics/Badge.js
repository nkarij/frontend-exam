import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Colors } from '../../constants/Theme'

class Badge extends Component {
    componentDidMount(){}

    render() {
        const { notificationsCount } = this.props;
        // console.log()
        if(notificationsCount > 0) {
            return (
                <Circle >
                    <BadgeText 
                    badgeValue={notificationsCount}> {notificationsCount} </BadgeText>
                </Circle>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
      notificationsCount: state.PushNotes.notifications.length,
    }
}

export default connect(mapStateToProps)(Badge)

const Circle = styled.View`
  height: 15;
  width: 15;
  border-radius: 50;
  padding: 0;
  position: absolute;
  left: 10;
  bottom: 0;
  ${'' /* background-color: ${Colors.icons.iconBadge}; */}
  align-self: center;
  opacity: ${({ focused }) => (focused ? 0.5 : 1)};
`

const BadgeText = styled(Text)`
  font-size: 10;
  font-weight: bold; 
  align-self: center;
  ${'' /* color: ${Colors.icons.tabLabelSelected} */}
`