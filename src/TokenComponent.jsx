import React, { useState } from "react";

function TokenComponent() {
  const [state, setState] = useState({
    blueTokens: "",
    bluePrefix: "",
    blueTokensPerRow: "",
    redTokens: "",
    redPrefix: "",
    redTokensPerRow: "",
  });

  const [redGroups, setRedGroups] = useState([]);
  const [blueGroups, setBlueGroups] = useState([]);

  function distributeGroups(count, mark, prefix) {
    const result = [];
    let group = [];

    for (let i = 1; i <= count; i++) {
      group.push(`${prefix}${i}`);

      if (group.length == mark) {
        result.push(group);
        group = [];
      }
    }

    if (group.length > 0) {
      result.push(group);
    }

    return result;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    setRedGroups(
      distributeGroups(state.redTokens, state.redTokensPerRow, state.redPrefix)
    );
    setBlueGroups(
      distributeGroups(
        state.blueTokens,
        state.blueTokensPerRow,
        state.bluePrefix
      )
    );
  };

  const handleClear = () => {
    setState({
      blueTokens: "",
      bluePrefix: "",
      blueTokensPerRow: "",
      redTokens: "",
      redPrefix: "",
      redTokensPerRow: "",
    });
    setRedGroups([]);
    setBlueGroups([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" , marginBottom: '50px'}}>Token  generator application</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <label style={labelStyle}>
          <span style={spanStyle}>Number of blue tokens :</span>
          <input
            type="number"
            name="blueTokens"
            value={state.blueTokens}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          <span style={spanStyle}>Blue token prefix :</span>
          <input
            type="text"
            name="bluePrefix"
            value={state.bluePrefix}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          <span style={spanStyle}>Blue tokens per row :</span>
          <input
            type="number"
            name="blueTokensPerRow"
            value={state.blueTokensPerRow}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          <span style={spanStyle}>Number of red tokens :</span>
          <input
            type="number"
            name="redTokens"
            value={state.redTokens}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          <span style={spanStyle}>Red token prefix :</span>
          <input
            type="text"
            name="redPrefix"
            value={state.redPrefix}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          <span style={spanStyle}>Red tokens per row :</span>
          <input
            type="number"
            name="redTokensPerRow"
            value={state.redTokensPerRow}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={buttonStyle} onClick={handleGenerate}>
          Generate
        </button>
        <button style={buttonStyle} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div style={{display:'flex',margin:'0px auto', maxWidth: '240px'}}>

      <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "20px",
        }}
        >
        {blueGroups.map((item, index) => (
            <div key={index} style={{ display: "flex" }}>
            {item.map((subItem, subIndex) => (
                <div
                key={subIndex}
                style={{ ...tokenStyle, backgroundColor: "blue" }}
                >
                {subItem}
              </div>
            ))}
          </div>
        ))}
        {redGroups.map((item, index) => (
            <div key={index} style={{ display: "flex" }}>
            {item.map((subItem, subIndex) => (
                <div
                key={subIndex}
                style={{ ...tokenStyle, backgroundColor: "red" }}
                >
                {subItem}
              </div>
            ))}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "8px",
  margin: "5px 0",
  boxSizing: "border-box",
  borderRadius: "4px",
  border: "1px solid #ccc",
  flex: 2,
};

const spanStyle = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  alignItems: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#8d959f",
  cursor: "pointer",
  fontSize:'18px'
};

const labelStyle = {
  display: "flex",
};

const tokenStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  width: "60px",
  height: "60px",
  border: '2px solid black'
};

export default TokenComponent;
