import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderColor: "#22577A",
    borderWidth: "5px",
  },
  text: {
    color: "#22577A"
  },
  media: {
    height: 200,
  },
  less: {
    color: "red",
    fontWeight: 700,
  },
  more: {
    color: "green",
    fontWeight: 700,
  },
  same: {
    color: "black",
    fontWeight: 700,
  },
});

export default useStyles;