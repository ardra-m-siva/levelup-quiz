import React from 'react'

const Subjects = () => {
  const onlineSubjects = ["Linux", "Bash", "Docker", "React", "Nodejs", "Next.js", "VueJs", "Mysql", "HTML", "Javascript", "Python", "Django"]

  return (
    <div>
      <h3>Subject Details </h3>
      <button className='btn btn-info'>+ Add An Offline Subject </button>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>External Subjects</th>
            <th>Internal Subjects</th>
          </tr>
        </thead>
        <tbody>
          {onlineSubjects.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td><i class="fa fa-check"></i></td>
              <th>-</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Subjects