import { useEffect } from "react"
import { data, gData } from './data'

const getColor = (n: any) => '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0');

function nodePaint1({ id, x, y }: any, color: any, ctx: any) {
  ctx.fillStyle = color;
  [
    () => { ctx.fillRect(x - 6, y - 4, 12, 8); }, // rectangle
    () => { ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill(); }, // triangle
    () => { ctx.beginPath(); ctx.arc(x, y, 5, 0, 2 * Math.PI, false); ctx.fill(); }, // circle
    () => { ctx.font = '10px Sans-Serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Text', x, y); } // text
  ][id % 4]();
}

function nodePaint({ id, x, y }: any, color: any, ctx: any) {
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.arc(x, y, 5, 0, 2 * Math.PI, false); ctx.fill();
  ctx.font = '4px Montserrat'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const { text, margin = [0, 0] } = data[id]
  ctx.fillText(text, x + margin[0], y + margin[1]);
}

const Background = () => {

  useEffect(() => {
    const func = async () => {
      const domEl = document.getElementById('graph')
      const container = document.getElementById('graph-container')
      
      const ForceGraph = (await import('force-graph')).default
      if (domEl && container) {
        const myGraph = ForceGraph()
        myGraph(domEl)
          .width(container.clientWidth)
          .height(container.clientHeight)
          .nodeCanvasObject((node, ctx) => nodePaint(node, getColor(node.id), ctx))
          // .nodePointerAreaPaint(nodePaint)
          .nodeLabel('id')
          .cooldownTicks(10)
          .graphData(gData);
          myGraph.d3Force('top', null);
          myGraph.onEngineStop(() => myGraph.zoomToFit(400,100));
      }
    }
    func()
  }, []);

  return (
    <>
      <div id="graph">
      </div>
    </>
  );
};

export default Background;
