import React, { useState } from 'react';

interface Submission {
  id: number;
  name: string;
  email: string;
  submissionDate: string;
}

interface SubmissionTableProps {
  submissions: Submission[];
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ submissions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredSubmissions = submissions.filter((submission) => {
    const isNameMatch = submission.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isEmailMatch = submission.email.toLowerCase().includes(searchTerm.toLowerCase());

    let isDateInRange = true;
    if (startDate && endDate) {
      const submissionDate = new Date(submission.submissionDate);
      const start = new Date(startDate);
      const end = new Date(endDate);
      isDateInRange = submissionDate >= start && submissionDate <= end;
    }

    return isNameMatch || isEmailMatch || isDateInRange;
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Submission Table</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md mr-4"
        />
        <label className="mr-4">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border rounded-md mr-4"
        />
        <label className="mr-4">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>

      <table className="min-w-full border rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Submission Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission) => (
            <tr key={submission.id} className="hover:bg-gray-100">
              <td className="p-2">{submission.id}</td>
              <td className="p-2">{submission.name}</td>
              <td className="p-2">{submission.email}</td>
              <td className="p-2">{submission.submissionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
