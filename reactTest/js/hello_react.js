var HelloMessage = React.createClass({
        render: function() {
          return(<div> <h1>Hello {this.props.arr[0]} {this.props.ob.key}</h1>;
        <Name name={this.props.name} /></div>)}
});
var Name = React.createClass({
    render:function(){
        return ( <h2>{this.props.name}</h2>);

       
    }
});

ReactDOM.render(<HelloMessage name="John" arr={['a1', 'a2']} ob={{key: 'value'}} />, document.getElementById('example1'));
ReactDOM.render(
<div>
<h1>菜鸟教程</h1>
<h2>欢迎学习 React</h2>
<p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
</div>
,
    document.getElementById('example')
  );
var LikeButton = React.createClass({
        getInitialState: function() {
          return {liked: false};
        },
        handleClick: function(event) {
          this.setState({liked: !this.state.liked});
        },
        render: function() {
          var text = this.state.liked ? '喜欢' : '不喜欢';
          return (
            <p onClick={this.handleClick}>
              你<b>{text}</b>我。点我切换状态。
            </p>
          );
        }
      });

      ReactDOM.render(
        <LikeButton />,
        document.getElementById('example3')
      );
 var HelloMessage = React.createClass({
      getDefaultProps: function() {
        return {
          name: 'Runoob'
        };
      },
      render: function() {
        return <h1>Hello {this.props.name}</h1>;
      }
    });

    ReactDOM.render(
      <HelloMessage />,
      document.getElementById('example4')
    );
    var Counter = React.createClass({
  getInitialState: function () {
    return { clickCount: 0 };
  },
  handleClick: function () {
    this.setState(function(state) {
      return {clickCount: state.clickCount + 1};
    });
  },
  render: function () {
    return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
  }
});
ReactDOM.render(
  <Counter />,
  document.getElementById('message')
);
var Hello = React.createClass({
    getInitialState:function(){
        return {
            opacity:1.0
        }
    },
    componentDidMount:function(){
        this.timer = setInterval(function(){
            var opacity = this.state.opacity;
            opacity -=0.05;
            if (opacity<0.1) {
                opacity=1.0;
            };
            this.setState({
                opacity:opacity
            });
        }.bind(this),100);
    },
    render:function(){
        return (
            <div style={{opacity:this.state.opacity}}>Hello {this.props.name}</div>
        );
    }
});
ReactDOM.render(<Hello name="react" />,document.getElementById('opacitydom'));

var Button = React.createClass({
      getInitialState: function() {
        return {
          data:0
        };
      },
      setNewNumber: function() {
        this.setState({data: this.state.data + 1})
      },
      render: function () {
          return (
             <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
             </div>
          );
        }
    })
    var Content = React.createClass({
      componentWillMount:function() {
          console.log('Component WILL MOUNT!')
      },
      componentDidMount:function() {
           console.log('Component DID MOUNT!')
      },
      componentWillReceiveProps:function(newProps) {
            console.log('Component WILL RECEIVE PROPS!')
      },
      shouldComponentUpdate:function(newProps, newState) {
            return true;
      },
      componentWillUpdate:function(nextProps, nextState) {
            console.log('Component WILL UPDATE!');
      },
      componentDidUpdate:function(prevProps, prevState) {
            console.log('Component DID UPDATE!')
      },
      componentWillUnmount:function() {
             console.log('Component WILL UNMOUNT!')
      },

        render: function () {
          return (
            <div>
              <h3>{this.props.myNumber}</h3>
            </div>
          );
        }
    });
      ReactDOM.render(

         <div>
            <Button />
         </div>,
        document.getElementById('example')
      );