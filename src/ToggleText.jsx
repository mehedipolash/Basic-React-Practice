import { useState } from 'react';

export default function ToggleText() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }
  return (
    <div className="card1">
      <button onClick={handleVisibility}>
        {visible ? 'HideText' : 'ShowText'}
      </button>

      {visible && (
        <p>
          {' '}
          <h3>Hello,React learner!</h3>
        </p>
      )}
    </div>
  );
}
