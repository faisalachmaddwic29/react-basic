import React from "react";

// INI ADALAH STATEFUL COMPONENT
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        console.log("constructor");
    }

    componentDidMount() {
        this.setState({ count: 1 });

        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        if (this.state.count === 10) {
            this.setState({ count: 0 });
        }
        console.log("componentDidUpdaate");
    }

    render() {
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button
                    onClick={() =>
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }
                    className="bg-black p-3 text-white"
                >
                    +
                </button>
                {console.log("render")}
            </div>
        );
    }
}

export default Counter;
