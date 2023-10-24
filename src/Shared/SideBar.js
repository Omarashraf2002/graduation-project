// import React, { useState, useEffect } from "react";
// import {
//   makeStyles,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@material-ui/core";
// import { Link, useLocation } from "react-router-dom";

// const drawerWidth = 240;
// const activeColor = "linear-gradient(to left, red, indigo)";

// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     background: "black",
//   },
//   listItem: {
//     "&.active": {
//       background: activeColor,
//     },
//   },
// }));

// const Sidebar = () => {
//   const classes = useStyles();
//   const [activePage, setActivePage] = useState(0);
//   const location = useLocation();

//   useEffect(() => {
//     // Extract the route path
//     const path = location.pathname;
//     // Determine the active page index based on the path
//     let pageIndex = 0;
//     if (path === "/") {
//       pageIndex = 0;
//     } else if (path === "/page2") {
//       pageIndex = 1;
//     }
//     // Update the active page state
//     setActivePage(pageIndex);
//   }, [location]);

//   return (
//     <Drawer
//       className={classes.drawer}
//       variant="permanent"
//       classes={{
//         paper: classes.drawerPaper,
//       }}
//     >
//       <List>
//         <ListItem
//           button
//           className={
//             activePage === 0 ? classes.listItem + " active" : classes.listItem
//           }
//           component={Link}
//           to="/"
//         >
//           <ListItemText
//             primaryTypographyProps={{ style: { color: "white" } }}
//             primary="Page 1"
//           />
//         </ListItem>
//         <ListItem
//           button
//           className={
//             activePage === 1 ? classes.listItem + " active" : classes.listItem
//           }
//           component={Link}
//           to="/page2"
//         >
//           <ListItemText
//             primaryTypographyProps={{ style: { color: "white" } }}
//             primary="Page 2"
//           />
//         </ListItem>
//         {/* Add other pages as needed */}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
