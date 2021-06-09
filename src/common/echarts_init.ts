// simple init Echarts
import Echarts from 'echarts';
class Echartsinit {
    public echarts = Echarts;
    public init(dom: HTMLCanvasElement, option: object) {
        let Charts = (this.echarts as any).init(dom);
        Charts.setOption(option);
        return Charts;
    };
    public resize(Charts: any) {
        Charts.resize();
    }
}
export default new Echartsinit();