// import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

const TaskCard = ({task}) => {
    const {id, title, description} = task;
    return (
        <div className="grid grid-cols-3 gap-4">
         <Card className="w-[400px] gap-4 mt-4">
      {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
       {     description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
    </div>
    );
};

export default TaskCard;