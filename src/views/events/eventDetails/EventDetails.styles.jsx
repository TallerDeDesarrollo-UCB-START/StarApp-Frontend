import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    image_container: {
        borderStyle: "solid"
    },
    details_container: {
        borderStyle: "solid",
        borderLeft: 0,
        paddingTop: 30,
        paddingBottom: 30
    },
    description_container: {
        borderStyle: "solid",
        borderTop: 0,
        minHeight: 75
    }
}));

export default useStyles;