import React from 'react';
import { Form } from 'semantic-ui-react';
import { Grid, Button } from 'semantic-ui-react';

const ThemePicker = (props) => {
  const { id, title, required, value, onChange, colors, className } = props;

  React.useEffect(() => {
    if (!props.value && props.default) {
      props.onChange(props.id, props.default);
    }
  });

  return colors && colors.length > 0 ? (
    <Form.Field
      inline
      required={required}
      className={className}
      id={'field-' + id}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column
            width="12"
            className="color-picker-widget"
            verticalAlign="middle"
          >
            <div className="wrapper">
              <label htmlFor={`field-${id}`}>{title ? title : 'Color'}</label>

              <div className="buttons">
                {colors.map((color) => {
                  if (color.type === 'pluggable') {
                    return (
                      <Button
                        key={id + color.name}
                        className={color.name}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onChange(id, color.name);
                        }}
                        active={value === color.name}
                        circular
                        aria-label={color.label}
                        title={color.label}
                      />
                    );
                  } else {
                    return (
                      <Button
                        key={id + color.name}
                        style={{ backgroundColor: color.name }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onChange(id, color.name);
                        }}
                        active={value === color.name}
                        circular
                        aria-label={color.label}
                        title={'Color: ' + color.label}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>
  ) : null;
};

export default ThemePicker;
