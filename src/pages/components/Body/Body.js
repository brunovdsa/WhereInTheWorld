import {Component} from 'react';
import api from './Api';

class Body extends Component{
    
    state={
        countrys: [], 
    }

    async componentDidMount(){
        const response = await api.get('')

        const LimitedData = response.data.slice(0,8)

        this.setState({countrys: LimitedData});        
    }

    render(){

        const {countrys} = this.state;

        return(
            <div>
                <h1>Listar Países </h1>
                {console.log(countrys)}
                {countrys.map(country => (
                    <li key={country.name}>
                        <h2>{country.name}</h2>
                    </li>
                ))}
            </div>
        );
    };
};
export default Body;