import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  commandsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Interface',
      items: [
        'interface/grid-snap',
        'interface/linetype',
        'interface/lineweight',
        'interface/text-editor',
      ],
    },
    {
      type: 'category',
      label: 'Shapes',
      items: [
        'commands/line',
        'commands/polyline',
        'commands/rectangle',
        'commands/circle',
        'commands/arc',
        'commands/ellipse',
        'commands/text',
        'commands/spline-cv',
        'commands/spline-fit',
      ],
    },
    {
      type: 'category',
      label: 'Edit',
      items: [
        'commands/move',
        'commands/copy',
        'commands/rotate',
        'commands/mirror',
        'commands/scale',
        'commands/delete',
        'commands/trim',
        'commands/extend',
        'commands/offset',
        'commands/fillet',
        'commands/chamfer',
        'commands/undo',
        'commands/redo',
      ],
    },
    {
      type: 'category',
      label: 'Markup',
      items: [
        'commands/leader',
        'commands/leader-add',
        'commands/leader-remove',
        'commands/dim-linear',
        'commands/dim-aligned',
        'commands/dim-continue',
        'commands/dim-radius',
        'commands/dim-diameter',
        'commands/dim-angular',
      ],
    },
    {
      type: 'category',
      label: 'Layer',
      items: [
        'commands/layer-make-current',
        'commands/layer-match',
        'commands/layer-isolate',
        'commands/layer-unfreeze-all',
      ],
    },
    {
      type: 'category',
      label: 'Layouts',
      items: [
        'commands/viewport-rectangle',
        'commands/viewport-copy',
        'commands/page-manager',
      ],
    },
    {
      type: 'category',
      label: 'Navigate',
      items: [
        'commands/pan',
        'commands/zoom-in',
        'commands/zoom-out',
        'commands/fit',
      ],
    },
    {
      type: 'category',
      label: 'Measure',
      items: [
        'commands/distance',
        'commands/angle',
      ],
    },
    {
      type: 'category',
      label: 'Style',
      items: [
        'commands/match-properties',
      ],
    },
    {
      type: 'category',
      label: 'File',
      items: [
        'commands/import',
        'commands/new-file',
        'commands/files',
        'commands/print',
        'commands/export',
        'commands/wipestorage',
      ],
    },
    {
      type: 'category',
      label: 'Other',
      items: [
        'commands/help',
      ],
    },
  ],
};

export default sidebars;
