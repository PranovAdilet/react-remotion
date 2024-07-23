import {CSSProperties, FC} from 'react';
import {AbsoluteFill, interpolate, Sequence} from "remotion";

interface IProps {
    index: number
    imageDuration: number
    frame: number
    image: string
}

const Image:FC<IProps> = ({index,  imageDuration, frame, image}) => {
    const imageOpacity = interpolate(
        frame - index * imageDuration,
        [0, 15, imageDuration - 15, imageDuration],
        [0, 1, 1, 0],
        { extrapolateRight: 'clamp' }
    );
    return (
        <Sequence
            key={index}
            from={index * imageDuration}
            durationInFrames={imageDuration}
        >
            <AbsoluteFill
                style={{...fillStyle, opacity: imageOpacity,}}
            >
                <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={imageStyle}
                />
            </AbsoluteFill>
        </Sequence>
    );
};

export default Image;

const fillStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
} as CSSProperties;