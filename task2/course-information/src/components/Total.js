// Course total
const Total = (props) => {
    const totalAmount = props.parts.reduce((sum, {exercises}) => sum + exercises, 0);

    return(
      <p>Number of exercises {totalAmount}</p>
    );
  }

export default Total;