import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pokemon Solid',
    color: "#22577A",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6)
  },
}));

export default useStyles;