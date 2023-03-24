import { useEffect } from "react"
import { gData } from './data'

const Background = () => {

  useEffect(() => {
    const func = async () => {
      const domEl = document.getElementById('graph')

      const textColor = "#B417F199"
      const linkColor = "#f5e2c829"

      const ForceGraph = (await import('force-graph')).default
      if (domEl) {
        const myGraph = ForceGraph()
        myGraph(domEl)
          .width(domEl.clientWidth)
          .height(domEl.clientHeight)
          .nodeCanvasObject((node: any, ctx, globalScale) => {
            const label = node.id as string;
            const fontSize = 24 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2) as [number, number]
            ctx.fillStyle = '#0E0B16';
            ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = textColor;
            ctx.fillText(label, node.x, node.y);

            node.__bckgDimensions = bckgDimensions;
          })
          .nodePointerAreaPaint((node: any, color, ctx) => {
            ctx.fillStyle = textColor;
            const bckgDimensions = node.__bckgDimensions as [number, number];
            bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
          })
          .linkColor(() => linkColor)
          .linkWidth(2)
          .linkDirectionalParticles(() => 4)
          .linkDirectionalParticleSpeed(() => 0.001)
          .nodeLabel('id')
          .cooldownTicks(0)
          .graphData(gData);
        myGraph.d3Force('center', null);
      }
    }
    func()
  }, []);

  return (
    <>
      <div id="graph" className="absolute w-full h-full lg:left-[20%]">
      </div>
    </>
  );
};

export default Background;
