import { ThemePickerWidget } from './Widgets';

const applyConfig = (config) => {
  config.widgets.widget.theme_picker = ThemePickerWidget;

  return config;
};

export default applyConfig;
