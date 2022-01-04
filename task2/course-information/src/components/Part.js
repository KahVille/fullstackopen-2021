// Course part
const Part = ({part}) => {
    return(
      <div>
        <h2>{part.name}</h2>
        <p>{part.exercises}</p>
      </div>
    );
}

export default Part;