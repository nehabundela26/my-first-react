import React from 'react';
import '../../App.css';

class ListItem extends React.Component{
    render(){
        const {data} = this.props;
        const nameList = data.map((row,index) => {
            return (
                    <tr>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.city}</td>
                    <td><button onClick={() => this.props.deleteEvent(index)}>delete</button></td>
                    </tr>
            )
        })

        return(
        <table className="table">
        <thead>
        <tr>
            <td>name</td>
            <td>
                <button onClick={() => this.props.sortBy('age')}>age</button></td>
            <td>city</td>
            </tr>        
        </thead>
        <tbody>
            { nameList }
        </tbody>
        </table>
        )
    }
}
export default ListItem;
/* export default function ListItem(props){
    return(
        <table className="table">
        <thead>
        <tr>
            <td>name</td>
            <td>
                <button onClick={() => props.sortBy('age')}>age</button></td>
            <td>city</td>
            </tr>        
        </thead>
        <tbody>
            {
                props.data.map(row => (
                    <tr>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.city}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
    )
} */