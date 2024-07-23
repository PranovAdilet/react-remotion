import {CSSProperties, FC} from "react";
import {AbsoluteFill, Sequence, spring} from "remotion";

interface IProps {
    index: number
    textDuration: number
    fps: number
    frame: number
    text: string
}

const Title:FC<IProps> = ({index, textDuration, fps, frame, text}) => {
    const calculatedFrame = frame - index * textDuration - (textDuration / 2)

    const textOpacity = spring({
        frame: calculatedFrame,
        fps,
        config: {
            damping: 200,
            stiffness: 100,
        },
    });

    const textScale = spring({
        frame: calculatedFrame,
        fps,
        config: {
            damping: 200,
            stiffness: 100,
        },
    });
    return (
        <Sequence
            key={index}
            from={index * textDuration + Math.floor(textDuration / 2)}
            durationInFrames={textDuration}
        >
            <AbsoluteFill
                style={{
                    ...fillStyle,
                    opacity: textOpacity,
                    transform: `scale(${textScale})`,
                }}
            >
                <h1 style={h1Style}>
                    {text}
                </h1>
            </AbsoluteFill>
        </Sequence>
    );
};

export default Title;

const fillStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
};

const h1Style = {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
} as CSSProperties;