import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pokemon Solid',
    color: "#22577A",
  },
  AppBar: {
    background: "#FFCB05",
  }
}));

export default useStyles;