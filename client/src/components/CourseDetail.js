import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../utils/apiHelper";
import Markdown from 'react-markdown'

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(async () => {
    //     const response = await api("/courses/" + id, "GET", ""); 
    //     if (response.status === 200) {
    //         const courseDetail = await response.json();
    //         setCourse(courseDetail); 
    //     } else if (response.status === 401) {
    //         return null; 
    //     } else {
    //         throw new Error(); 
    //     }
    // }, id);

    useEffect(() => {
        api('/courses/' + id, 'GET', null)
        .then(res => res.json())
        .then(res => setCourse(res)); 
    }, []);

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" href="./update-course">Update Course</Link>
                    <a className="button" href="#">Delete Course</a>
                    <a className="button button-secondary" href="/">Return to List</a>
                </div>
            </div>
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>EDIT THIS!</p>
                            <Markdown>{course.description}</Markdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>
                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <Markdown>{course.materialsNeeded}</Markdown>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default CourseDetail; 