'use client';

const LoadingScreen = () => {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <span>
          <h2>Oberon Studio</h2>
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen; 