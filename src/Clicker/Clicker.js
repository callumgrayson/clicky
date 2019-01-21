import React from 'react';
import axios from 'axios';
import {
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'content-box',
  },
  bigContainerCl: {
    margin: 0,
    padding: 0,
    width: '100%',
    minHeight: '97vh',
    display: 'flex',
    justifyContent: 'center',
    // background: 'lightBlue',
  },
  paperCl: {
    width: '100%',
    maxWidth: 700,
    minHeight: '80%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    // background: 'lightGreen',
  },
  big1Space: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'start',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    padding: '5px 0',
    margin: '5px',
    // background: 'yellow',
  },
  heading: {
    width: '100%',
    marginBottom: '10px',
    padding: 0,
    // background: 'cyan',
  },
  countBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    // background: 'green',
    padding: '0 20px',
  },
  countBox: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    // background: 'goldenrod',
    margin: '0 20px',
  },
  countBoxDiv: {
    display: 'flex',
    margin: '20px',
    // background: 'lightGreen',
  },
  big2ButtonBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'pink',
    margin: '0 20px',
  },
  listItem1: {
    textAlign: 'center',
    // background: 'lightCyan',
  },
  list1: {
    width: '100%',
    height: 'auto',
    maxHeight: '80vh',
    overflow: 'hidden',
    // background: 'violet',
  },
});

function TimeStamps(props) {
  const { classes, times, ip } = props;
  if (times.length) {
    return (
      <div>
        <Typography
          align='center'
          gutterBottom >
          Your Clicks
        </Typography>
        {
          times.map((t) => {
            const id = t.timestamp.toString();
            const count = t.count;
            const date1 = new Date(t.timestamp);
            const date2 = date1.toString();
            const date3 = `${count} : ${date2} from ${ip}`;

            return (
              <ListItem
                key={id}
                className={classes.listItem1}>
                <ListItemText primary={date3} />
              </ListItem>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className={classes.placeholderCl}>
        <Typography align='center'>
          
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(
  class Clicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        ip: '',
        timeStamps: []
      }

      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      axios.get(`https://nxe6l78bx2.execute-api.ap-southeast-1.amazonaws.com/dev/clinc`)
      .then(response => {
        const count = response.data.currentClickCount;
        this.setState({ count });
      });
    }

    handleClick(e) {
      e.preventDefault();
      const timestamp1 = Date.now();
      const objSend = {timestamp: timestamp1};
      const header = {'content-type': 'application/json'};
      axios.post(`https://nxe6l78bx2.execute-api.ap-southeast-1.amazonaws.com/dev/clinc`, objSend, header).then(res => {

        if (res.data.newClickCount > 0) {
          const tsObj = {
            count: this.state.count + 1,
            timestamp: timestamp1
          }
          const timestamps = [tsObj].concat(this.state.timeStamps);
          this.setState(state => ({
            count: this.state.count + 1,
            timeStamps: timestamps,
            ip: res.data.sourceIp
          }));
        } else {
          console.log("Error: Did not successfully write timestamp");
        }
      });
    }

    render() {
      const { classes } = this.props;

      return (
        <div className={classes.bigContainerCl}>
          <Paper className={classes.paperCl}>
            <div className={classes.big1Space}>
              <Typography
                className={classes.heading}
                variant='h3'
                align='center'
                gutterBottom>
                Clicky
              </Typography>
              <Typography
                className={classes.heading}
                variant='h6'
                align='center'
                gutterBottom>
                Add your click to the count!
              </Typography>

              <div className={classes.countBar}>
                <div className={classes.countBox}>
                  <div className={classes.countBoxDiv}>
                    <Typography
                      variant='h6'
                      align='center'
                      gutterBottom>
                      Current Count:
                    </Typography>
                  </div>
                  <div className={classes.countBoxDiv}>
                    <Typography
                      variant='h4'
                      align='center'
                      gutterBottom>
                      {this.state.count}
                    </Typography>
                  </div>
                </div>
              
                <div className={classes.big2ButtonBox}>
                  <Button 
                    variant="fab" 
                    color="primary" 
                    aria-label="Add" 
                    onClick={this.handleClick}>
                    <AddIcon />
                  </Button>
                </div>
              </div>

              <List
                className={classes.list1}
                disablePadding
                dense
                >
                <TimeStamps
                  classes={classes}
                  times={this.state.timeStamps}
                  ip={this.state.ip}
                />
              </List>
            </div>
            
          </Paper>
        </div>
      )
    }
  }
)
