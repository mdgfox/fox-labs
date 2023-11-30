import { FC, useCallback, useEffect, useRef } from 'react';

interface Props {
    canvasWidth: number;
    canvasHeight: number;
    length: number;
    iterations: number;
}
export const KochSnowflakeFractal: FC<Props> = ({canvasWidth, canvasHeight, length, iterations}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const deg = Math.PI / 180;
    const leg = useCallback((context: CanvasRenderingContext2D, n: number, len: number) => {
        context.save();
        if (n === 0) {
            context.lineTo(len, 0);
        }
        else {
            context.scale(1 / 3, 1 / 3);

            leg(context,n - 1, len);
            context.rotate(60 * deg);

            leg(context,n - 1, len);
            context.rotate(-120 * deg);

            leg(context,n - 1, len);
            context.rotate(60 * deg);

            leg(context,n - 1, len);
        }
        context.restore();
        context.translate(len, 0);
    }, [deg]);

    const drawFlake = useCallback((context: CanvasRenderingContext2D, x: number, y: number, len: number, n: number) => {
        context.save();

        context.beginPath();
        context.translate(x, y);
        context.moveTo(0, 0);

        leg(context, n, len);
        context.rotate(-120 * deg);

        leg(context, n, len);
        context.rotate(-120 * deg);

        leg(context, n, len);

        context.closePath();
        context.stroke();
        context.restore();
    }, [deg, leg]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        context?.clearRect(0, 0, canvasWidth, canvasHeight);
        context?.reset();
        drawFlake(context!, 125 , 200 , length , iterations);
    }, [canvasHeight, canvasWidth, drawFlake, iterations, length]);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
        </div>
    );
}
