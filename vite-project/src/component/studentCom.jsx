export default function StudentCom(props){
return(
    <div>
    <h1>Student Information </h1>
    <p>Name:{props.name}</p>    
    <p>Course:{props.course}</p>
    </div>
);
}