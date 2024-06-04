import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const PetList = ({ list }) => {
  console.log(list);
  return (
    <Card className=" w-96 mt-28">
      <CardHeader
        color="blue-gray"
        className=" h-56 flex items-center justify-center"
      >
        <img
          src={list.image}
          alt="card-image"
          className=""
        />
      </CardHeader>

      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default PetList;
