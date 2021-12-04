import { Redirect } from "react-router"
import {connect} from "react-redux"

const mapStateToProps = (state) => ({isLogged:state.Auth.isLogged})


export default function withRedirect(Component) {
    const withRedirect = (props) => {
        if(!props.isLogged) return <Redirect to='/login'/>
        return <Component {...props} />
    }
    const withRedirectContainer = connect(mapStateToProps)(withRedirect)
    return withRedirectContainer
}