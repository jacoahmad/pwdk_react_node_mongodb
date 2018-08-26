import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({
  label,
  type,
  value,
  name,
  onChange
}) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange} />
    </div>
  )
}

InputGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
}
export default InputGroup;