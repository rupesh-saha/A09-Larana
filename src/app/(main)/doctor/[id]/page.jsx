import React from 'react';

const DoctorDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  return (
    <div>
      doctor
    </div>
  );
};

export default DoctorDetails;