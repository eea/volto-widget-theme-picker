import { ThemePickerWidget, ThemePickerWidgetView } from './Widgets';

const applyConfig = (config) => {
  config.widgets.widget.theme_picker = ThemePickerWidget;

  if (config.widgets.views?.widget) {
    config.widgets.views.widget.theme_picker = ThemePickerWidgetView;
  }
  return config;
};

export default applyConfig;
