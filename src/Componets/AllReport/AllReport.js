import React, { useEffect, useState } from 'react';
import AllReportCard from './AllReportCard';

const AllReport = () => {

  const [allReports, setAllReports] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/allreportData`)
      .then(res => res.json())
      .then(data => setAllReports(data))
      .catch(error => console.log(error))
  }, [allReports])

  return (
    <div>
      <div className='container mt-3 mb-3'>

        <h3 className='text-center'>All Seller List</h3>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          {
            allReports.map(allReport => <AllReportCard
              key={allReport._id}
              allReportData={allReport}
            ></AllReportCard>)
          }

        </div>

      </div>
    </div>
  );
};

export default AllReport;