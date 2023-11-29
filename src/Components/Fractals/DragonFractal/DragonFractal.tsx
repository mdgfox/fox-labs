import { FC, useCallback, useEffect, useRef } from 'react';

interface Props {
    canvasWidth: number;
    canvasHeight: number;
    depth: number;
}
export const DragonFractal: FC<Props> = ({canvasWidth, canvasHeight, depth}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = useCallback((context: CanvasRenderingContext2D, x1: number , y1: number , x2: number, y2: number, depth: number) => {
        if(depth === 0){
            context.moveTo(x1 , y1);
            context.lineTo(x2 , y2);
            context.stroke();
            return;
        }

        const tx = (x1 + x2) / 2 + (y2 - y1) / 2;
        const ty = (y1 + y2) / 2 - (x2 - x1) / 2;

        draw(context, x2 , y2 , tx , ty , depth - 1);
        draw(context, x1 , y1 , tx , ty , depth - 1);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        context?.clearRect(0, 0, canvasWidth, canvasHeight);
        context?.reset();
        draw(context!, 125 , 200 , 375 , 200 , depth);
    }, [canvasHeight, canvasWidth, depth, draw]);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
        </div>
    );
}
