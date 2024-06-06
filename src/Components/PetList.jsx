import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 

const PetList = ({ list }) => {
  console.log(list);
  return (
    <Card className="mt-6">
      <CardHeader
        color="blue-gray"
        className="h-56 flex items-center justify-center"
      >
        <img src={list.image} alt="card-image" />
      </CardHeader>

      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {list.name}
        </Typography>
        <Typography className="flex justify-between text-base">
          <h3>
            <span className="font-semibold">Location :</span> {list.location}
          </h3>
          <h3>
            <span className="font-semibold">Age :</span> {list.age}
          </h3>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/petDetails/${list._id}`}>
          {" "}
          <Button className="bg-blue-400">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PetList;
