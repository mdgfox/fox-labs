import { FC, useCallback, useEffect, useRef } from 'react';

interface Props {
    canvasWidth: number;
    canvasHeight: number;
    depth: number;
}

interface Point2D {
    x: number;
    y: number;
}

export const SerpinskyTriangleFractal: FC<Props> = ({canvasWidth, canvasHeight, depth}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawTriangle = useCallback((context: CanvasRenderingContext2D, a: Point2D , b: Point2D , c: Point2D) => {
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.moveTo(b.x, Math.round(b.y));
        context.lineTo(Math.round(c.x), Math.round(c.y));
        context.moveTo(Math.round(c.x), Math.round(c.y));
        context.lineTo(Math.round(a.x), Math.round(a.y));
        context.stroke();
    }, []);

    const calculate = useCallback((context: CanvasRenderingContext2D, a: Point2D , b: Point2D , c: Point2D, depth: number) => {
        if(depth > 0) {
            const a1: Point2D = {x: Math.trunc((a.x + b.x) / 2), y: Math.trunc((a.y + b.y) / 2)};

            const b1: Point2D = {x: Math.trunc((b.x + c.x) / 2), y: Math.trunc((b.y + c.y) / 2)};

            const c1: Point2D = {x: Math.trunc((c.x + a.x) / 2), y: Math.trunc((c.y + a.y) / 2)};

            drawTriangle(context, a1, b1, c1);

            calculate(context, a, a1, c1, depth - 1);
            calculate(context, b, a1, b1, depth - 1);
            calculate(context, c, b1, c1, depth - 1);
        }
    }, [drawTriangle]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        context?.clearRect(0, 0, canvasWidth, canvasHeight);
        context?.reset();

        drawTriangle(context!, {x: 225, y: 16.89}, {x: 50, y: 320}, {x: 400, y: 320});
        calculate(context!, {x: 225, y: 16.89}, {x: 50, y: 320}, {x: 400, y: 320}, depth);
    }, [calculate, canvasHeight, canvasWidth, depth, drawTriangle]);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
        </div>
    );
}
