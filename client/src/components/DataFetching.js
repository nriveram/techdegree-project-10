import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/courses')
            .then(res => {
                console.log(res);
                setCourses(res.data); 
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <ul>
                {
                    courses.map(course => <li>{course.title}</li>)
                }
            </ul>
        </div>
    );
}

export default DataFetching; 