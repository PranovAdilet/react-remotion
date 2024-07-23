import {FC} from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import Title from "./Title";
import Image from "./Image";
import { images, texts } from "../helper";

export const MyVideo: FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    const imageDuration = Math.floor(durationInFrames / images.length);
    const textDuration = Math.floor(durationInFrames / texts.length);

    return (
        <AbsoluteFill style={containerStyle}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    frame={frame}
                    image={image}
                    imageDuration={imageDuration}
                    index={index}
                />
            ))}
            {texts.map((text, index) => (
                <Title
                    key={index}
                    text={text}
                    index={index}
                    frame={frame}
                    fps={fps}
                    textDuration={textDuration}
                />
            ))}
        </AbsoluteFill>
    );
};

const containerStyle = {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
};