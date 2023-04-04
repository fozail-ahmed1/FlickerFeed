const styles = {
    layout: {
      minHeight: "100vh",
    },
    header: {
      color: "#fff",
      textAlign: "center",
      fontSize: "3rem",
      background:"#c4ddf2",
      height: "5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1",
    },
    image: {
      width: '45px'
    },
    title: {
      color: "#936950",
      margin: "0",
      fontFamily: "Montserrat"
  },
  avatar: {
    color: "#f56a00",
    backgroundColor: "#fde3cf",
    marginRight: "6px",
  },
  userInfo: {
    position: "absolute",
    right: "25px",
    top: "20px",
    display: "flex",
    alignItems: "center",
  },
  login: {
    position: "absolute",
    right: "25px",
    top: "25px",
  },
  homeLink: {
    display: "flex",
    alignItems: "center",
  },
  AddPost: {
    position: "absolute",
    left: "2%",
    top:"-0.1em",
  },

  '@media (max-width: 500px)': {
    title:{
      display:'none',
    }
  },
  };
  export default styles;