import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
    Paper: {
        background: "#FFCB05",
        borderColor: "#22577A",
        width: "40%",
    },
    text: {
        color: "#22577A",
        fontFamily: "Pokemon Solid"
    },
    btn: {
        marginBottom: theme.spacing(2),
    }
}))