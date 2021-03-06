import React from "react";

interface Props {
    src?: string;
    alt?: string;
    style?: any;
};

const FluidImage:React.FC<Props> = (props) => {
    const { src, alt, style} = props;
    return <img className="img-fluid" src={src} alt={alt} style={style} />
};

FluidImage.defaultProps = {
    src: "https://via.placeholder.com/400",
    alt: "Placeholder",
    style: {
        "maxWidth": "100%",
        "maxHeight": "100%",
        "borderRadius": "10px",
        "background": "none"
    }
};

export default FluidImage;