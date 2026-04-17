function InputField({ label, type = 'text', name, value, onChange, inputRef }) {
  return (
    <div style={{ marginBottom: '16px', textAlign: 'left' }}>
      <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '14px',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}

export default InputField
