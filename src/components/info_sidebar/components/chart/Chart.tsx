import "./Chart.css";

export const Chart = () => {
  return (
    <section className="info-sidebar__row-2">
      <h2>Storage</h2>
      <div className="chart">
        <div className="circle-container">
          <div className="circle">
            <span className="percentage">
              <span className="percentage__number">85</span>
              <span className="percentage__text">Used</span>
            </span>
          </div>
        </div>
        <h4>420.2 GB of 500 GB used</h4>
      </div>

      <div className="storage-info-container">
        <div className="storage-info">
          <div className="storage-info__col-1">
            <div className="square-info" />
            <div className="storage-info__col-1__text">
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>200 GB</span>
        </div>
        <div className="divisor" />
        <div className="storage-info">
          <div className="storage-info__col-1">
            <div className="square-info" />
            <div className="storage-info__col-1__text">
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>125 GB</span>
        </div>
        <div className="divisor" />
        <div className="storage-info">
          <div className="storage-info__col-1">
            <div className="square-info" />
            <div className="storage-info__col-1__text">
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>75 GB</span>
        </div>
        <div className="divisor" />
        <div className="storage-info">
          <div className="storage-info__col-1">
            <div className="square-info" />
            <div className="storage-info__col-1__text">
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>50 GB</span>
        </div>
      </div>
    </section>
  );
};
