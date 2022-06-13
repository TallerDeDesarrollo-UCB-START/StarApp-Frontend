import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    card_event:{
        display: "flex",
        flexWrap: "wrap"
    },
    image_container: {
        borderStyle: "solid"
    },
    details_container: {
        fontSize:"20px",
        borderStyle: "solid",
        borderLeft: 0,
        paddingTop: 30,
        paddingBottom: 30,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch"
    },
    information_container:{
        flex: "wrap",
        justifyContent: "space-between"
    },
    description_container: {
        fontSize:"20px",
        borderStyle: "solid",
        borderTop: 0,
        minHeight: 75,
        padding: "10px"
    }
    
}));

export default useStyles;