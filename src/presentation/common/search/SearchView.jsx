import {useState} from "react";
import SearchCourseComponent from "./components/SearchCourseComponent.jsx";
import {CourseSearchUseCase} from "../../../Domain/UseCases/common/CourseSearchUseCase.js";
import Failure from "../../../Core/Failure/Failure.js";

export default function SearchView(){
    const [searchContent, setSearchContent] = useState("");
    const [courses, setCourses] = useState([])
    return (
        <>
            <div className="search-input-container">
                <input
                    onChange={(event) => {
                        setSearchContent(event.target.value)
                    }}
                    value={searchContent}
                    id="search"
                    name="search"
                    type="text"
                    required={false}
                    className="search-input"
                    placeholder=" search"
                />
                <button className="button-input" onClick={
                    async (e) => {
                        e.preventDefault();
                        const result = await CourseSearchUseCase({searchContent});
                        if (result instanceof Failure) {
                            alert(result.detail)
                        }else {setCourses(result);}
                    }
                }>search</button>
            </div>
            <SearchCourseComponent courses={courses}/>
        </>
    );
}