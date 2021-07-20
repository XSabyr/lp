import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <Typography variant="h4">
        Привет, на этом сайте ты найдешь огромное количество интереснейших курсов на всевозможные
        темы.
      </Typography>
      <Typography variant="h6">
        Если готов начать, то не будем тянуть, жми на кнопку снизу
      </Typography>
      <Link to="/courses">
        <Button variant="contained" color="primary">
          Начать
        </Button>
      </Link>
    </div>
  );
};

export default WelcomePage;
