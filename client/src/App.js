import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CircularProgress from '@material-ui/core/CircularProgress'
import {withStyles} from '@material-ui/core/styles'
// import TestText from './components/TestText'

const styles = theme =>({
  root: {
    width: '100%',
    marginTop:theme.spacing.unit*3,
    overflowX:'auto'
  },
  table: {
    minWidth:1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

// 실제 html의 <body> 태그에 해당하는 내용을 App.js가 채우게 된다.
// 실질적인 웹 사이트 화면에 대한 내용 출력을 담당하는 부분
class App extends Component {
  state = {
    customers: '',
    completed : 0
  }
  // 이 API 는 여러분의 컴포넌트가 화면에 나타나게 됐을 때 호출
  componentDidMount(){
    this.timer = setInterval(this.progress, 20)
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }
  componentWillMount(){
    clearInterval(this.timer);
  }
// 비동기 처리 
// await 은 async 키워드가 붙은 함수 내부에서만 사용 가능
// 비동기 함수가 리턴하는 Promise로 부터 결과값을 추출해준다.
  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const {completed} = this.state;
    this.setState({completed: completed >= 100? 0 : completed + 1})
  }
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c => {
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}
            gender={c.gender}/>
          }) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>
          }
          </TableBody>
        </Table>
      </Paper>  
    );
  }
}

export default withStyles(styles)(App);
