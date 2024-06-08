import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonationList = ({ list }) => {
  const { name, image, maxDonationAmount, createdAt, _id } = list;
  return (
    <Card className="shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="ui/ux review check" className="h-72 w-full" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Pet name : {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex justify-end items-center gap-1.5 font-normal text-sm"
          >
            {new Date(createdAt).toLocaleDateString()}
          </Typography>
        </div>
        <Typography color="gray">
          Maximum donation : {maxDonationAmount} $
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Link to={`/donationDetails/${_id}`}>
          <Button size="lg" fullWidth={true}>
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DonationList;
