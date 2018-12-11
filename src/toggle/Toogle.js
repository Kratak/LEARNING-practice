import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMessage } from './actions'

const Toogle = ({messageVisivility, toggleMessage}) => 
    (
      <div>          
        <button onClick={toggleMessage}>Toggle Me</button>
        {messageVisivility && <p>toggled text</p>}
      </div>
    )

const mapStateToProps = (state) => ({
    messageVisivility: state.toggle.messageVisivility,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage,
    
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Toogle)