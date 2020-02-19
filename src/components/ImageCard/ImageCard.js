import React from "react";


class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.image = props.image;
    }

    state = {
        spans: 0
    }

    updateSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10) + 1;
        this.setState({spans});
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.updateSpans);
    }

    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={this.image.urls.regular} alt={this.image.description} />
            </div>
        )
    }
}

export default ImageCard