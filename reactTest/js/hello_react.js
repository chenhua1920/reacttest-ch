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

var UserGist = React.createClass({
  getInitialState:function(){
    return {
      username:"",
      lastGistUrl:''
    }
  },
  componentDidMount:function(){
    this.serverRequest = $.get(this.props.source,function(result){
      var lastGist = result[0];
      this.setState({
        username:lastGist.owner.login,
        lastGistUrl:lastGist.html_url
      })
    }.bind(this));
  },
  componentWillUnmount:function(){
    this.serverRequest.abort();
  },
  render:function(){
    return (
      <div>
        {this.state.username} 用户最新的Gist共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    )
  }
});
      ReactDOM.render(<UserGist source = "https://api.github.com/users/octocat/gists" />,
        document.getElementById("ajaxbox"));

//表单
var Content = React.createClass({
  render: function() {
    return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
            <h4>{this.props.myDataProp}</h4>
            </div>;
  }
});
var HelloMessage = React.createClass({
  getInitialState: function() {
    return {value: 'Hello Runoob!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return <div>
            <Content myDataProp = {value} 
              updateStateProp = {this.handleChange}></Content>
           </div>;
  }
});
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('inputexample')
);

//ref
var MyComponent = React.createClass({
      handleClick: function() {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
      },
      render: function() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
          <div>
            <input type="text" ref="myInput" />
            <input
              type="button"
              value="点我输入框获取焦点"
              onClick={this.handleClick}
            />
          </div>
        );
      }
    });

    ReactDOM.render(
      <MyComponent />,
      document.getElementById('exampleref')
    );

    var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.getElementById("examplechild")
);