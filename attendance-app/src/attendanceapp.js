import React, { useReducer } from "react";

const initialState = [
  { id: 1, name: "Alice", present: false },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: false }
];

function reducer(state, action) {
  switch (action.type) {
    case "PRESENT":
      return state.map(s =>
        s.id === action.id ? { ...s, present: true } : s
      );

    case "ABSENT":
      return state.map(s =>
        s.id === action.id ? { ...s, present: false } : s
      );

    default:
      return state;
  }
}

export default function Attendance() {
  const [students, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Attendance App (useReducer)</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.present ? "Present" : "Absent"}</td>
              <td>
                <button
                  onClick={() => dispatch({ type: "PRESENT", id: s.id })}
                >
                  Present
                </button>

                <button
                  onClick={() => dispatch({ type: "ABSENT", id: s.id })}
                  style={{ marginLeft: "10px" }}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
