const combineSiteColors = (availableColors, pluggableStyles) => {
  const mappedPluggables =
    pluggableStyles &&
    pluggableStyles.map((style) => ({
      name: style.title.toLowerCase(),
      label: style.title,
      type: 'pluggable',
    }));

  const mappedAvailables =
    availableColors &&
    availableColors.map((color) => ({
      name: color,
      label: color,
      type: 'color',
    }));

  const combined = mappedPluggables.concat(mappedAvailables);

  return combined;
};

export { combineSiteColors };
