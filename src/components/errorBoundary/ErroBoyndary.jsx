import { Component } from "react";
import ErrorMesasage from "../errorMesasage/ErrorMesasage";


class ErrorBoyndary extends Component {
    state = {
        error: false
    }

    static getDerivedStateFromError(error) {
        return {error: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log('ErrorBoyndary',error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMesasage/>
        }

        return this.props.children;
    }
}

export default ErrorBoyndary;