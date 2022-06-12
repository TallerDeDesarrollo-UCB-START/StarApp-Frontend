import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    actions_container: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    filters_container: {
        display: "flex",
        flexFlow: "row wrap",
        gap: "10px"
    },
    cards_container: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        rowGap: "30px"
    }
}));

export default useStyles;