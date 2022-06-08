import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card_container: {
    width: 345,
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
  },
  card_content: {
    display: "flex",
    flexFlow: "row wrap",
  },
  left_card_content: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
    width: "30%",
  },
  right_card_content: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
    gap: "5px",
    width: "70%"
  },
  icon_and_text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center" 
  }
}));

export default useStyles;