export default function Exams(props){
    return <>
        <p>exams</p>
        {props.exams.map((exam, index) => (
            <div key={index} className="exam">
                <p>{exam.title}</p>
                <p>{exam.description}</p>
                <p>{exam.exam_number}</p>
                <p>{exam.start_datetime}</p>
                <p>{exam.end_datetime}</p>
            </div>
        ))}
    </>
}