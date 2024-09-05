import { useRef, FC, useEffect, useState } from 'react';

import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';

export interface CanvasProps{
  title: string | undefined
}


const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState<
    CanvasRenderingContext2D | undefined
  >();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context }}>
        <div className='relative text-center mx-auto'>
          <canvas id="canvas" ref={canvasRef} width={width} height={150}></canvas>
          <div className='absolute inset-0 content-center px-auto w-full text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center text-primary'>{props.title}</div>
          <Wave />
        </div>
        
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;
