import { EchartPieComponent } from "./echart-pie/echart-pie.component";
import { EchartBarComponent } from "./echart-bar/echart-bar.component";
import { EchartHeatmapComponent } from "./echart-heatmap/echart-heatmap.component";
import { EchartRadarComponent } from "./echart-radar/echart-radar.component";

// ng g c ../assets/examples/chart/ --skip-import

export const CHART_EXAMPLE_COMPONENT_MAP = {
  'pie': [
    'echart-pie',
  ],
  'bar': [
    'echart-bar'
  ],
  'heatmap': [
    'echart-heatmap'
  ],
  'radar': [
    'echart-radar'
  ]
}

export const CHART_EXAMPLE_COMPONENTS = {
  'echart-pie': {
    title: 'Echart Pie',
    component: EchartPieComponent
  },
  'echart-bar': {
    title: 'Echart Bar',
    component: EchartBarComponent
  },
  'echart-heatmap': {
    title: 'Echart Heatmap',
    component: EchartHeatmapComponent
  },
  'echart-radar': {
    title: 'Echart Radar',
    component: EchartRadarComponent
  },
  
}

export const CHART_EXAMPLE_COMPONENT_LIST = [
 EchartPieComponent,
 EchartBarComponent,
 EchartHeatmapComponent,
 EchartRadarComponent
]