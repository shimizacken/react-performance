<div align='center'>
    <h1>
        React Performance
    </h1>
</div>

Pure Component will perform shallow comparison

```js
export default class Title extends React.PureComponent {

    render() {

        console.log('Title component rendered!');

        return(
            <h1>
                {this.props.title}
            </h1>
        );
    }
}
```