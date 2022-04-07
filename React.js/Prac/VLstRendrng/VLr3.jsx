import React from 'react'

function VLr3() {
    const subjects = [
        {
            Subjname : 'English',
            Teacher : 'Hari',
            Time : '11:00',
            Marks : 100
        },
        {
            Subjname : 'Hindi',
            Teacher : 'Ravi',
            Time : '03:00',
            Marks : 100
        },
        {
            Subjname : 'Telugu',
            Teacher : 'Siri',
            Time : '08:00',
            Marks : 100
        }
    ]
    const subjectlist = subjects.map(subject => <h2> Subject :{subject.Subjname}. Teacher :{subject.Teacher}. Time of Class : {subject.Time}. Marks : {subject.Marks}</h2>)
  return <div>{subjectlist} </div>
}

export default VLr3